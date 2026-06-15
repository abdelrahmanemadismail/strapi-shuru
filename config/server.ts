import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // Environment-based url resolution for OAuth provider compatibility
  url: env('PUBLIC_URL', env('SERVER_URL', env('NODE_ENV') === 'production' ? 'https://cms.shuru.sa' : `http://localhost:${env.int('PORT', 1337)}`)),
  proxy: env.bool('PROXY', true),
  app: {
    keys: env.array('APP_KEYS'),
  },


});

export default config;
