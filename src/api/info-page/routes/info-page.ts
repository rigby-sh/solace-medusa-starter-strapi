export default {
  routes: [
    {
      method: 'GET',
      path: '/info-pages',
      handler: 'info-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/info-pages/:id',
      handler: 'info-page.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/info-pages',
      handler: 'info-page.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/info-pages/:id',
      handler: 'info-page.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/info-pages/:id',
      handler: 'info-page.delete',
      config: {
        policies: [],
      },
    },
    // Кастомный роут для получения страницы по slug
    {
      method: 'GET',
      path: '/info/:slug',
      handler: 'info-page.findBySlug', // Используем новый метод
      config: {
        auth: false, // Пример: сделать публичным, если нужно
        policies: [],
        middlewares: [],
      },
    },
  ],
};