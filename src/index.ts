// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi } /*: { strapi: Core.Strapi }*/) {
    // Add Arabic locale automatically if it doesn't exist
    const localeService = strapi.plugin('i18n').service('locales');
    const existingLocales = await localeService.find();

    // Default English is already created by Strapi
    const hasArabic = existingLocales.some((locale) => locale.code === 'ar');

    if (!hasArabic) {
      try {
        await localeService.create({
          name: 'Arabic (ar)',
          code: 'ar'
        });
        strapi.log.info('✅ Successfully added Arabic (ar) locale to i18n plugin');
      } catch (error) {
        strapi.log.error('❌ Failed to add Arabic locale', error);
      }
    }

    // Automatically bootstrap permissions for saved-insight content type
    try {
      const authenticatedRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'authenticated' } });

      if (authenticatedRole) {
        const actions = [
          'api::saved-insight.saved-insight.find',
          'api::saved-insight.saved-insight.findOne',
          'api::saved-insight.saved-insight.create',
          'api::saved-insight.saved-insight.update',
          'api::saved-insight.saved-insight.delete',
          'api::saved-insight.saved-insight.destroy',
        ];

        for (const action of actions) {
          const existing = await strapi
            .query('plugin::users-permissions.permission')
            .findOne({
              where: {
                action,
                role: authenticatedRole.id,
              },
            });

          if (!existing) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: authenticatedRole.id,
              },
            });
            strapi.log.info(`✅ Granted permission: ${action} to Authenticated role`);
          }
        }
      }
    } catch (error) {
      strapi.log.error('❌ Failed to bootstrap saved-insight permissions', error);
    }
  },
};
