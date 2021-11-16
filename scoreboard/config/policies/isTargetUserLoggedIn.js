module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    if (!ctx.request.query.user) {
      return ctx.unauthorized("specify a user with ?user=${user}")
    }

    console.log(`isUserLoggedin there is a query parameter`, ctx.request.query.user)
    console.log(`isUserLoggedin there is a query parameter`, ctx.state.user.id)

    const targetuser = ctx.request.query.user.toString()
    const loggedInUser = ctx.state.user.id.toString()

    console.log("targetuser", targetuser)
    console.log("loggedInUser", loggedInUser)

    if (targetuser === loggedInUser) {
      return await next()
    } else {
      return ctx.unauthorized("you are requesting a different users info you rat")
    }
  };
  return ctx.unauthorized("you must be logged in to do that")
}
