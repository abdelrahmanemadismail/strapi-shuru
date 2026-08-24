'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const { servicesPageData } = require('./seed-services-page');

async function pushServicesPage() {
  console.log('--- Pushing Services Page Single Type to Remote Strapi ---');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  try {
    // 1. Try finding existing Arabic record
    console.log('Checking existing Arabic services-page...');
    let res = await fetch(`${baseUrl}/services-page?locale=ar&populate=*`, { headers });
    let data = await res.json();
    let existingDoc = data.data;

    let documentId = null;

    if (existingDoc && existingDoc.documentId) {
      documentId = existingDoc.documentId;
      console.log(`Found Arabic documentId: ${documentId}. Updating...`);
      const updateRes = await fetch(`${baseUrl}/services-page`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ data: servicesPageData.ar, locale: 'ar' })
      });
      console.log('Update AR Status:', updateRes.status);
    } else {
      console.log('Creating Arabic Services Page...');
      const createRes = await fetch(`${baseUrl}/services-page`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ data: servicesPageData.ar, locale: 'ar' })
      });
      console.log('Create AR Status:', createRes.status);
      const createData = await createRes.json();
      if (createData.data) {
        documentId = createData.data.documentId;
      }
    }

    // 2. English localization
    console.log('Updating English localization...');
    const enRes = await fetch(`${baseUrl}/services-page?locale=en`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({ data: servicesPageData.en, locale: 'en' })
    });
    console.log('English Update Status:', enRes.status);

    console.log('✅ Remote services-page sync finished.');
  } catch (err) {
    console.error('Error pushing services page to remote:', err);
  }
}

if (require.main === module) {
  pushServicesPage();
}

module.exports = { pushServicesPage };
