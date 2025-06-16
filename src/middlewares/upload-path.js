export default (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.request.path === '/api/upload' && ctx.request.method === 'POST') {
      if (ctx.request.body) {
        ctx.request.body.path = 'ca267def-bertazzoni/StrapiBertazzoni';
      }
    }
    await next();
  };
};
