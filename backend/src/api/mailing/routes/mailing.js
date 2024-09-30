module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/mailing',
      handler: 'mailing.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
