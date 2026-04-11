export default {
  routes: [
    {
      method: "GET",
      path: "/pages",
      handler: "page.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/pages/slug/:slug",
      handler: "page.findOneBySlug",
      config: {
        auth: false,
      },
    }
  ]
};
