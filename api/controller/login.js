const crypto = require('crypto');
const user_db = require('../mode/user');
const utils = require('../utils');

module.exports = async function login (ctx, next) {
  var reqBody = ctx.request.body
  var userInfo = await user_db.findOne({name: reqBody.name, password: reqBody.password});
  
  if (userInfo) {
    
    utils.resData(ctx,{
      token: getToken(userInfo)
    },'ok')

  } else {
    utils.resData(ctx,{},'',0)
  }
}

// 生成并返回一个token
function getToken(userInfo) {
  return 'token';
}