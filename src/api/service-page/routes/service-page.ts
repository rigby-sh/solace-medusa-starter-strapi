export default {
  routes: [
    {
      method: 'GET',
      path: '/service-page',
      handler: 'service-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/service-page',
      handler: 'service-page.update',
      config: {
        policies: [],
      },
    },
  ],
};