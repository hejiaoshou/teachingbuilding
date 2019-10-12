function RData (ctx, data, msg, code) {
  ctx.body = {
    code: code || 1,
    msg: msg || '',
    data: data || {}
  }
}

module.exports = {
  resData: RData
}