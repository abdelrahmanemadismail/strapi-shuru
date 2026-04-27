// This is a conceptual example
const files = await strapi.db.query('plugin::upload.file').findMany();

for (const file of files) {
  // If formats is null, you need to populate it based on the file type
  if (!file.formats) {
    // You would logic here to construct the thumbnail URL
    // e.g., replacing 'filename.jpg' with 'thumbnail_filename.jpg'
    const newFormats = {
      thumbnail: {
        url: file.url.replace(file.name, `thumbnail_${file.name}`)
      }
    };

    await strapi.db.query('plugin::upload.file').update({
      where: { id: file.id },
      data: { formats: newFormats },
    });
  }
}