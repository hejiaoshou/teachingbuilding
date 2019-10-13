const mongoose = require('mongoose');
const db = require('./db');

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  major: String,
  title: String,
  phone: Number,
})

const teacher = new mongoose.model('teacher', teacherSchema);

module.exports = teacher;