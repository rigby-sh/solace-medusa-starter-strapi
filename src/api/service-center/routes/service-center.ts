export default {
  routes: [
    {
      method: 'GET',
      path: '/service-centers',
      handler: 'service-center.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/service-centers/:id',
      handler: 'service-center.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/service-centers',
      handler: 'service-center.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/service-centers/:id',
      handler: 'service-center.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/service-centers/:id',
      handler: 'service-center.delete',
      config: {
        policies: [],
      },
    },
  ],
};