const course = require('../mode/course');
const utils = require('../utils');

async function addCourse(ctx) {
  var reqBody = ctx.request.body
  var dbres = await course.create({
    name: reqBody.name,
    teacherId: reqBody.teacherId
  })

  utils.resData(ctx,dbres,'添加成功')
}

async function removeCourse(ctx) {
  var reqBody = ctx.request.body
  var dbres = await course.removeOne({
    _id: reqBody.id
  })

  utils.resData(ctx,dbres)
}

async function updateCourse(ctx) {
  var reqBody = ctx.request.body
  
}

async function findCourse(ctx) {
  var reqBody = ctx.request.body
  var dbres = await course.find({})

  utils.resData(ctx,dbres)
}

module.exports = {
  addCourse: addCourse,
  removeCourse: removeCourse,
  updateCourse: updateCourse,
  findCourse: findCourse
}