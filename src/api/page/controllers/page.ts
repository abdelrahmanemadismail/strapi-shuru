import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
  async findOneBySlug(ctx: any) {
    const { slug } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.db.query('api::page.page').findOne({
      where: { slug },
      populate: query.populate || ['blocks', 'seo']
    });

    if (!entity) return ctx.notFound("Page not found");

    return this.transformResponse(entity);
  }
}));