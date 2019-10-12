const mongoose = require('mongoose');
const db = require('./db');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  token: String
})

const user = new mongoose.model('user', userSchema);

module.exports = user;