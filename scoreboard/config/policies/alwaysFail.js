module.exports = async (ctx, next) => {
  ctx.response.status = 403;
  ctx.response.body = {
    message: 'This enpoint is closed',
  };
}
