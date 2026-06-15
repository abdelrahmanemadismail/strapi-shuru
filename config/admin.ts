import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      maxRefreshTokenLifespan: env.int('ADMIN_JWT_REFRESH_LIFESPAN', 30 * 24 * 60 * 60 * 1000), // 30 days
      maxSessionLifespan: env.int('ADMIN_JWT_SESSION_LIFESPAN', 24 * 60 * 60 * 1000), // 1 day
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env("CLIENT_URL")],
      async handler(uid, { documentId, locale, status }) {
        const document = await (strapi as any).documents(uid).findOne({
          documentId,
          populate: null,
          fields: ["slug"],
        });
        const { slug } = document;

        const urlSearchParams = new URLSearchParams({
          secret: env("PREVIEW_SECRET"),
          ...(slug && { slug }),
          uid,
          status,
        });

        const previewURL = `${env("CLIENT_URL")}/api/preview?${urlSearchParams}`;
        return previewURL;
      },
    },
  },
});

export default config;
