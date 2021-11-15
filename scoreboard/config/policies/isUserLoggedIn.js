module.exports = async (ctx, next) => {
  console.log('isLoggedIn')
  if (ctx.state.user) {
    return await next();
  }
  ctx.response.status = 403;
  ctx.response.body = {
    message: 'You must be logged in to do that.',
  };
}
