import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          // FIXED: Wrapped keys in a credentials object
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
          },
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET_NAME'),
            ACL: 'public-read',
          },
          baseUrl: `https://${env('AWS_BUCKET_NAME')}.s3.${env('AWS_REGION')}.amazonaws.com`,
          rootPath: 'uploads/',
        },
      },
      actionOptions: {
        upload: {
          ACL: 'public-read',
        },
        uploadStream: {
          ACL: 'public-read',
        },
        delete: {},
      },
      breakpoints: {},
      sizeLimit: 50 * 1024 * 1024,
      responsiveDimensions: false,
    },
  },
});

export default config;