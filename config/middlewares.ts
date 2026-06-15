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
          'connect-src': [
            "'self'",
            "https:",
            // OAuth providers
            "https://accounts.google.com",
            "https://www.googleapis.com",
            "https://api.linkedin.com",
            "https://www.linkedin.com",
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'localhost:*',
            '127.0.0.1:*',
            'shuru-bkt.s3.eu-west-3.amazonaws.com',
            // OAuth providers for profile images
            "https://lh3.googleusercontent.com",
            "https://media.licdn.com",
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'localhost:*',
            '127.0.0.1:*',
            'shuru-bkt.s3.eu-west-3.amazonaws.com',
          ],
          'frame-src': [
            "https://www.shuru.sa/",
            "https://shuru.sa/",
            // OAuth providers
            "https://accounts.google.com",
            "https://www.linkedin.com",
          ],
          'form-action': [
            "'self'",
            // OAuth providers
            "https://accounts.google.com",
            "https://www.linkedin.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'https://www.shuru.sa',
        'https://shuru.sa',
        'http://localhost:1337', // for development
        // OAuth provider origins
        'https://accounts.google.com',
        'https://www.linkedin.com',
        'https://linkedin.com',
        'https://api.linkedin.com', // Add LinkedIn API domain
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      keepHeaderOnError: true,
      credentials: true,
      optionsSuccessStatus: 200, // Add this for LinkedIn compatibility
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '50mb',
      jsonLimit: '50mb',
      textLimit: '50mb',
      formidable: {
        maxFileSize: 50 * 1024 * 1024, // 50MB
      },
    },
  },
  {
    name: 'strapi::session',
    config: {
      key: 'koa.sess', // session cookie name
      maxAge: 86400000, // 24 hours in ms
      autoCommit: true,
      overwrite: true,
      httpOnly: true,
      signed: true,
      rolling: false,
      renew: false,
      secure: env.bool('SESSION_SECURE', false),
      sameSite: 'lax', // More permissive for development
    },
  },
  'strapi::favicon',
  'strapi::public',
];

export default config;
