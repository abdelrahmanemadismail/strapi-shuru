import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'localhost:*', '127.0.0.1:*', 'shuru-bkt.s3.eu-west-3.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'localhost:*', '127.0.0.1:*', 'shuru-bkt.s3.eu-west-3.amazonaws.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: env.bool('SESSION_SECURE', false),
      },
    },
  },
  'strapi::favicon',
  'strapi::public',
];

export default config;
