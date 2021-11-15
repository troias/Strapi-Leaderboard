module.exports = async (ctx, next) => {

  console.log('demoPolicy');
  return await next();
  // '*': true,
}
