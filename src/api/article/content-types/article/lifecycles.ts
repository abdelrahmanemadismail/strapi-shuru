/**
 * Article lifecycles — syncs shared fields across all locales on save.
 *
 * Strategy:
 *  - READ  via strapi.db.query() — locale-agnostic, gives numeric IDs
 *  - WRITE via strapi.db.query() — bypasses Documents API locale validation
 *  - Cascade prevention via cooldown Map (db.query CAN trigger lifecycle hooks
 *    asynchronously after finally runs, so a Set alone is unreliable)
 *  - Localized relations (magazine_issues, categories) resolve to the correct
 *    target-locale entry using documentId lookup
 */

/** documentId → timestamp of last sync start. Blocks cascades for 5 s. */
const syncCooldown = new Map<string, number>();
const COOLDOWN_MS = 5000;

export default {
  async afterCreate(event: any) {
    await syncSharedFields(event.result);
  },
  async afterUpdate(event: any) {
    await syncSharedFields(event.result);
  },
};

async function syncSharedFields(savedEntry: any) {
  const documentId: string = savedEntry?.documentId;
  const currentLocale: string = savedEntry?.locale;
  if (!documentId || !currentLocale) return;

  // ── Cascade prevention ──────────────────────────────────────────────────
  const lastSync = syncCooldown.get(documentId) ?? 0;
  if (Date.now() - lastSync < COOLDOWN_MS) {
    strapi.log.debug(`[article lifecycle] Cooldown active for ${documentId} — skipping`);
    return;
  }
  syncCooldown.set(documentId, Date.now());
  // ────────────────────────────────────────────────────────────────────────

  try {
    strapi.log.info(`[article lifecycle] Syncing ${documentId} (locale: ${currentLocale})`);

    const localeService = strapi.plugin('i18n').service('locales');
    const allLocales: Array<{ code: string }> = await localeService.find();
    const siblingLocales = allLocales.map((l) => l.code).filter((c) => c !== currentLocale);
    if (siblingLocales.length === 0) return;

    // READ source entry with all relations
    const src: any = await strapi.db.query('api::article.article').findOne({
      where: { documentId, locale: currentLocale },
      populate: { cover_image: true, author: true, categories: true, magazine_issues: true, seo: true },
    });
    if (!src) return;

    strapi.log.info(`[article lifecycle] cover_image:${src.cover_image?.id ?? 'null'} author:${src.author?.id ?? 'null'} categories:[${(src.categories ?? []).map((c: any) => c.id)}] mag_issues:[${(src.magazine_issues ?? []).map((m: any) => m.id)}]`);

    for (const locale of siblingLocales) {
      try {
        // ── Resolve localized relation IDs for this specific target locale ──
        const catIds = await resolveLocaleIds('api::category.category', src.categories ?? [], locale);
        const magIds = await resolveLocaleIds('api::magazine-issue.magazine-issue', src.magazine_issues ?? [], locale);

        const sharedScalars = {
          slug: src.slug ?? null,
          enable_cover_image: src.enable_cover_image ?? false,
          publish_date: src.publish_date ?? null,
          is_featured: src.is_featured ?? false,
          cover_image: src.cover_image?.id ?? null,
          author: src.author?.id ?? null,
          seo: src.seo ? stripMeta(src.seo) : null,
        };

        const sibling: any = await strapi.db.query('api::article.article').findOne({
          where: { documentId, locale },
          populate: { cover_image: true, author: true, categories: true, magazine_issues: true, seo: true },
        });

        if (!sibling) {
          strapi.log.info(`[article lifecycle] Creating ${locale} draft for ${documentId}`);
          await strapi.db.query('api::article.article').create({
            data: {
              documentId,
              locale,
              title: src.title ?? '',
              description: src.description ?? null,
              ...sharedScalars,
              categories: catIds,
              magazine_issues: magIds,
              publishedAt: null,
            },
          });
          strapi.log.info(`[article lifecycle] ✅ Created ${locale} draft`);
        } else {
          const siblingCatIds = (sibling.categories ?? []).map((c: any) => c.id).sort().join(',');
          const newCatIds = [...catIds].sort().join(',');

          const siblingMagIds = (sibling.magazine_issues ?? []).map((m: any) => m.id).sort().join(',');
          const newMagIds = [...magIds].sort().join(',');

          const hasDifferences =
            sibling.slug !== sharedScalars.slug ||
            !!sibling.enable_cover_image !== !!sharedScalars.enable_cover_image ||
            sibling.publish_date !== sharedScalars.publish_date ||
            !!sibling.is_featured !== !!sharedScalars.is_featured ||
            (sibling.cover_image?.id ?? null) !== sharedScalars.cover_image ||
            (sibling.author?.id ?? null) !== sharedScalars.author ||
            JSON.stringify(sibling.seo ? stripMeta(sibling.seo) : null) !== JSON.stringify(sharedScalars.seo) ||
            siblingCatIds !== newCatIds ||
            siblingMagIds !== newMagIds;

          if (!hasDifferences) {
            strapi.log.info(`[article lifecycle] No changes needed for ${locale} (id:${sibling.id})`);
            continue;
          }

          await strapi.db.query('api::article.article').update({
            where: { id: sibling.id },
            data: {
              ...sharedScalars,
              categories: { set: catIds.map((id: number) => ({ id })) },
              magazine_issues: { set: magIds.map((id: number) => ({ id })) },
            },
          });
          strapi.log.info(`[article lifecycle] ✅ Synced to ${locale} (id:${sibling.id})`);
        }
      } catch (err) {
        strapi.log.error(`[article lifecycle] Failed for locale ${locale}:`, err);
      }
    }
  } catch (err) {
    strapi.log.error('[article lifecycle] Sync error:', err);
  }
}

/**
 * For each source entry, resolve the matching entry in the target locale
 * using documentId. Falls back to the source entry's id if not found.
 */
async function resolveLocaleIds(modelUid: string, entries: any[], targetLocale: string): Promise<number[]> {
  const ids: number[] = [];
  for (const entry of entries) {
    if (!entry.documentId) { ids.push(entry.id); continue; }
    const target: any = await strapi.db.query(modelUid).findOne({
      where: { documentId: entry.documentId, locale: targetLocale },
    });
    ids.push(target?.id ?? entry.id);
  }
  return ids;
}

function stripMeta(obj: any): any {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(stripMeta);
  const { id, documentId, createdAt, updatedAt, publishedAt, __component, ...rest } = obj;
  return Object.fromEntries(Object.entries(rest).map(([k, v]) => [k, typeof v === 'object' ? stripMeta(v) : v]));
}
