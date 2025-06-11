import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::info-page.info-page', ({ strapi }) => ({
  async findBySlug(ctx: Context) {
    const { slug } = ctx.params;
    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const entity = await strapi.service('api::info-page.info-page').find(query);
    // @ts-ignore
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0] || null);
  }
}));