module.exports = async (ctx, next) => {
  console.log("query is", ctx.query);
  console.log("whole ctx", ctx);
  console.log("request body is", ctx.request.body);
  console.log("whole ctx request", ctx.request);
  if (ctx.query.show) {
    ctx.state.show = ctx.query.show;
    console.log("query is:", ctx.state.show);
  } else {
    ctx.state.show = 'all';
  }
  await next();
}
