const mongoose = require('mongoose');
const config = require('../config/config');
const db = require('./db');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  superAdmini: Boolean,
  token: String
})

const user = new mongoose.model('user', userSchema);

// 初始化管理员账户
async function init() {
  var res = await user.find({name: 'admini'});
  if (res.length === 0) {
    user.create({
      name: config.DefaultAdmini.name,
      password: config.DefaultAdmini.pass
    })
  }
}

init();

module.exports = user;