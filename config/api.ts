import type { Core } from '@strapi/strapi';

const config: Core.Config.Api = {
  rest: {
    defaultLimit: 12,
    maxLimit: 50,
    withCount: true,
  },
};

export default config;
