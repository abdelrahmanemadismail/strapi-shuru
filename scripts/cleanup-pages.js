'use strict';
async function cleanup() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  try {
    const documents = await app.query('api::page.page').findMany({});
    for (const doc of documents) {
      await app.documents('api::page.page').delete({ documentId: doc.documentId });
    }
  } catch (error) {}
  await app.destroy();
  process.exit(0);
}
cleanup();
