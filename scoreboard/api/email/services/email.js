'use strict';

/**
 * `email` service.
 */

module.exports = {
  // exampleService: (arg1, arg2) => {
  //   return isUserOnline(arg1, arg2);
  // }

  sendEmail: async (subject, html) => {
    strapi.log.info('Services.email.sendEmail Sending email...');
        await strapi.plugins["email"].services.email.send({
          to: "hunter007nz@gmail.com",
          from: "StrapiTest@localhost",
          replayTo: "hunter007nz@gmail.com",
          subject,
          html,
        });
        strapi.log.info('Services.email.sendEmail Sending email...');
  }
};
