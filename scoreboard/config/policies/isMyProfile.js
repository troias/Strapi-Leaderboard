module.exports = async (ctx, next) => {

  console.log('isMyProfile policy');
  const { user } = ctx.state;
  const { id } = ctx.params;

  console.log('user', user)
  console.log('id', id)

  if (user) {
    if (user.id.toString() === id.toString()) {
      await next();
    } else {
      ctx.throw(403, 'You are not allowed to access this page');
    }
  }
}
