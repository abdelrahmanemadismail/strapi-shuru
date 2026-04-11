const { createStrapi, compileStrapi } = require('@strapi/strapi');
async function check() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  const pages = await app.db.query('api::page.page').findMany({});
  console.log(pages);
  await app.destroy();
}
check().catch(console.error);
