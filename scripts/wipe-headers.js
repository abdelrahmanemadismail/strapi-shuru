const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function run() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  try {
    const headers = await app.db.query('api::header.header').findMany();
    for (const h of headers) {
      await app.db.query('api::header.header').delete({ where: { id: h.id } });
      console.log(`Deleted header ${h.id}`);
    }
    console.log("Headers wiped successfully.");
  } catch(e) { console.error(e) }
  process.exit(0);
}
run();
