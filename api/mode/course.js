const mongoose = require('mongoose');
const db = require('./db');

const courseSchema = new mongoose.Schema({
  name: String,
  teacherId: String
})

const course = new mongoose.model('course', courseSchema);

module.exports = course;