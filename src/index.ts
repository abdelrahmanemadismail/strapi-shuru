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
  },
};
