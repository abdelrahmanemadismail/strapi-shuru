'use strict';

async function seedInformationRequests() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    console.log('🚀 Configuring Information Requests Collection...');

    // Grant public permission to create information-requests
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const existing = await strapi.query('plugin::users-permissions.permission').findOne({
        where: {
          action: 'api::information-request.information-request.create',
          role: publicRole.id,
        }
      });

      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::information-request.information-request.create',
            role: publicRole.id,
          }
        });
        console.log('✅ Granted public permission: api::information-request.information-request.create');
      }
    }

    // Check count of submissions
    const count = await app.documents('api::information-request.information-request').count();
    console.log(`Current Information Requests count: ${count}`);

    console.log('\n🎉 Information Requests collection ready and permissions granted!');
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (err) {
    console.error('❌ Error configuring information-request:', err);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedInformationRequests().catch(console.error);
