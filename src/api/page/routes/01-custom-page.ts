export default {
  routes: [
    {
      method: "GET",
      path: "/pages/slug/:slug",
      handler: "page.findOneBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
