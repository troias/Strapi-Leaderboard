module.exports = async (ctx, next) => {
  console.log('localDemo policy');
  return await next();
}
