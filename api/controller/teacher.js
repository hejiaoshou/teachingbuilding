const teacher = require('../mode/teacher');
const utils = require('../utils');

async function addteacher(ctx) {
  var reqBody = ctx.request.body
  var addInfo = await teacher.create({
    name: reqBody.name,
    age: reqBody.age,
    sex: reqBody.sex,
    major: reqBody.major,
    title: reqBody.title,
    phone: reqBody.phone,
  })

  utils.resData(ctx,addInfo,'添加成功')
}

async function teacherlist(ctx) {
  const teachersInfo = await teacher.find({})
  utils.resData(ctx,teachersInfo,'查询成功')
}

async function removeteacher(ctx) {
  var reqBody = ctx.request.body
  const res = await teacher.deleteOne({_id: reqBody.id});
  utils.resData(ctx,res)
}

async function updateteacher(ctx) {
  var reqBody = ctx.request.body
  var id = reqBody._id
  delete reqBody._id
  delete reqBody.__v
  const res = await teacher.update({_id: id},reqBody)
  utils.resData(ctx,res)
}

module.exports = {
  addteacher: addteacher,
  teacherlist: teacherlist,
  removeteacher: removeteacher,
  updateteacher: updateteacher,
}