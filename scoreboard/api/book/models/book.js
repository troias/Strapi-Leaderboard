'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {

lifecycles: {
  async afterDelete(result, params, callback) {
    console.log('afterDelete', result);
    const file = strapi.plugins['upload'].services.upload.fetch({
      id: result.picture.id
    });
    await strapi.plugins['upload'].services.upload.remove(file);

  },



}
}
