'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports =  {


  /**
   * Simple example.
   * Every monday at 1am.
   */
   '1 * * * * *': async () => {
  //   try {
  //     const req = await strapi.plugins['email'].services.email.send({
  //       to: 'cvtvazrwikxwyisfbs@adfskj.com',
  //       from: process.env.SENDGRID_DEFAULT_EMAIL,
  //       subject: 'the god',
  //       text: 'Hello world!',
  //       html: 'Hello world!',
  //     })

  //     console.log("send", req);

  //   } catch (error) {
  //     console.error("ERROR", error);
  //   }

  //    console.log("env",process.env.SENDGRID_DEFAULT_EMAIL)
    // const book = await strapi.services.score.findOne({player_contains: "alex"});
    // console.log("book", book);
    // strapi.log.trace("Book")
    // strapi.log.debug("bug")
    // strapi.log.info("info")
    // strapi.log.warn("warn")
    // strapi.log.error("error")
    // strapi.log.fatal("fatal")
    // console.log("utils function", strapi.config.functions.utils.getRandomInt(1, 10));
    // strapi.log.debug("utils", strapi.config.functions.utils.getRandomInt(1, 10));
    const firstPage = await strapi.services.page.findOne({id: 2});

    console.log("firstPage", firstPage);
    const updatedFirstpage = {...firstPage, title: "updated title"};
    updatedFirstpage.page_content.map(pageContent => {
      pageContent.person = "updated person"
      pageContent.title = "updated title"
      pageContent.quote = "updated quote"
      pageContent.content = "updated content"

    })
    ;
    console.log("updatedFirstpage", updatedFirstpage);



    // const updatedPage = await strapi.services.page.update({id: 2}, {...pageContent, person: "updated"});


    // console.log("updatedPage", updatedPage);
 },


}
