/**
 * Category lifecycles — syncs shared fields across all locales on save.
 *
 * Localized fields (NOT synced — each locale has its own value):
 *   name, slug, description
 *
 * Shared fields (synced across all locales):
 *   order, seo, parent_category
 *
 * Notes:
 *  - `children_categories` and `articles` are inverse sides — managed by their
 *    owning models, never synced here.
 *  - category has draftAndPublish: false, so no publishedAt handling.
 *  - Cascade prevention via cooldown Map (db.query can trigger lifecycle hooks
 *    asynchronously, making a Set-based lock unreliable).
 *  - parent_category is resolved to the target locale's entry via documentId.
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
    strapi.log.debug(`[category lifecycle] Cooldown active for ${documentId} — skipping`);
    return;
  }
  syncCooldown.set(documentId, Date.now());
  // ────────────────────────────────────────────────────────────────────────

  try {
    strapi.log.info(`[category lifecycle] Syncing ${documentId} (locale: ${currentLocale})`);

    const localeService = strapi.plugin('i18n').service('locales');
    const allLocales: Array<{ code: string }> = await localeService.find();
    const siblingLocales = allLocales.map((l) => l.code).filter((c) => c !== currentLocale);
    if (siblingLocales.length === 0) return;

    // READ source entry with all shared relations
    const src: any = await strapi.db.query('api::category.category').findOne({
      where: { documentId, locale: currentLocale },
      populate: { parent_category: true, seo: true },
    });
    if (!src) return;

    strapi.log.info(`[category lifecycle] order:${src.order ?? 'null'} parent_category:${src.parent_category?.id ?? 'null'} (docId:${src.parent_category?.documentId ?? 'null'})`);

    for (const locale of siblingLocales) {
      try {
        // Resolve parent_category to the target locale's entry
        let parentId: number | null = null;
        if (src.parent_category?.documentId) {
          const targetParent: any = await strapi.db.query('api::category.category').findOne({
            where: { documentId: src.parent_category.documentId, locale },
          });
          parentId = targetParent?.id ?? src.parent_category.id;
        }

        const sharedData = {
          order: src.order ?? null,
          seo: src.seo ? stripMeta(src.seo) : null,
          parent_category: parentId,
        };

        const sibling: any = await strapi.db.query('api::category.category').findOne({
          where: { documentId, locale },
        });

        if (!sibling) {
          // Create locale entry as draft — copy name/slug from source as placeholder
          strapi.log.info(`[category lifecycle] Creating ${locale} entry for ${documentId}`);
          await strapi.db.query('api::category.category').create({
            data: {
              documentId,
              locale,
              name: src.name ?? '',
              slug: src.slug ?? '',
              description: src.description ?? null,
              ...sharedData,
            },
          });
          strapi.log.info(`[category lifecycle] ✅ Created ${locale} entry`);
        } else {
          await strapi.db.query('api::category.category').update({
            where: { id: sibling.id },
            data: sharedData,
          });
          strapi.log.info(`[category lifecycle] ✅ Synced to ${locale} (id:${sibling.id})`);
        }
      } catch (err) {
        strapi.log.error(`[category lifecycle] Failed for locale ${locale}:`, err);
      }
    }
  } catch (err) {
    strapi.log.error('[category lifecycle] Sync error:', err);
  }
}

function stripMeta(obj: any): any {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(stripMeta);
  const { id, documentId, createdAt, updatedAt, publishedAt, __component, ...rest } = obj;
  return Object.fromEntries(Object.entries(rest).map(([k, v]) => [k, typeof v === 'object' ? stripMeta(v) : v]));
}
