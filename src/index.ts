import type { Core } from '@strapi/strapi';
import providers from '../config/providers';

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
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Override providers dynamically based on config/providers.ts
    try {
      const registry = strapi.plugin('users-permissions').service('providers-registry');

      for (const [providerName, providerConfig] of Object.entries(providers)) {
        if (!providerConfig.enabled) continue;

        const originalProvider = registry.get(providerName);
        if (!originalProvider) continue;

        const oauth2 = (providerConfig as any).oauth2;
        if (!oauth2) continue;

        registry.add(providerName, {
          ...originalProvider,
          grantConfig: {
            ...originalProvider.grantConfig,
            scope: oauth2.scope,
          },
          async authCallback({ accessToken }: { accessToken: string }) {
            const response = await fetch(oauth2.profileURL, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });

            if (!response.ok) {
              throw new Error(`Failed to fetch user info from ${providerName}`);
            }

            const body = await response.json() as any;
            const mapping = oauth2.fieldMapping || {};

            return {
              username: body[mapping.username] || body[mapping.firstName] || body.name || body.email?.split('@')[0],
              email: body[mapping.email] || body.email,
            };
          },
        });
        strapi.log.info(`✅ Successfully updated OAuth provider ${providerName} using config/providers.ts`);
      }
    } catch (error) {
      strapi.log.error('❌ Failed to update dynamic providers from config/providers.ts', error);
    }

    // Sync database store configuration for OAuth providers with config files
    try {
      const pluginStore = strapi.store({ type: 'plugin', name: 'users-permissions' });
      const grantSettings = await pluginStore.get({ key: 'grant' }) || {};
      let dbUpdated = false;

      // 1. Sync scopes from config/providers.ts
      for (const [providerName, providerConfig] of Object.entries(providers)) {
        if (!providerConfig.enabled) continue;

        const oauth2 = (providerConfig as any).oauth2;
        if (!oauth2) continue;

        if (grantSettings[providerName]) {
          const dbProvider = grantSettings[providerName];
          const targetScope = oauth2.scope;
          const currentScope = dbProvider.scope;

          const isScopeDifferent = !Array.isArray(currentScope) ||
            currentScope.length !== targetScope.length ||
            !currentScope.every((val: any, index: number) => val === targetScope[index]);

          if (isScopeDifferent) {
            dbProvider.scope = targetScope;
            dbUpdated = true;
            strapi.log.info(`🔄 Syncing OAuth scope for ${providerName} in database to: ${JSON.stringify(targetScope)}`);
          }
        }
      }

      // 2. Sync keys, secrets, callbacks, and enable states from config/plugins.ts (if defined in config)
      const configProviders = strapi.config.get('plugin::users-permissions.providers') || {};
      for (const [providerName, providerConfig] of Object.entries(configProviders) as [string, any][]) {
        if (!grantSettings[providerName]) {
          grantSettings[providerName] = {};
        }

        const dbProvider = grantSettings[providerName];

        if (providerConfig.enabled !== undefined && dbProvider.enabled !== providerConfig.enabled) {
          dbProvider.enabled = providerConfig.enabled;
          dbUpdated = true;
          strapi.log.info(`⚙️ Syncing OAuth enabled state for ${providerName} to: ${providerConfig.enabled}`);
        }

        if (providerConfig.key && dbProvider.key !== providerConfig.key) {
          dbProvider.key = providerConfig.key;
          dbUpdated = true;
          strapi.log.info(`🔑 Syncing OAuth key for ${providerName} from config/plugins.ts to database`);
        }

        if (providerConfig.secret && dbProvider.secret !== providerConfig.secret) {
          dbProvider.secret = providerConfig.secret;
          dbUpdated = true;
          strapi.log.info(`🔑 Syncing OAuth secret for ${providerName} from config/plugins.ts to database`);
        }

        if (providerConfig.callback && dbProvider.callback !== providerConfig.callback) {
          dbProvider.callback = providerConfig.callback;
          dbUpdated = true;
          strapi.log.info(`🔗 Syncing OAuth callback for ${providerName} from config/plugins.ts to database`);
        }
      }

      if (dbUpdated) {
        await pluginStore.set({ key: 'grant', value: grantSettings });
        strapi.log.info('✅ Database OAuth provider settings updated successfully');
      }
    } catch (error) {
      strapi.log.error('❌ Failed to sync OAuth provider settings to database store', error);
    }

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
