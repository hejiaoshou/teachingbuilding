const user_db = require('../mode/user');

// 校验用户是否登录的中间件
module.exports = async function islogin(ctx, next) {

  // 登录接口本身不需要做登录校验
  if (ctx.url !== '/login') {
    console.log("登录校验")
  }
  
  await next()
}

