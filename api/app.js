const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static');
const path = require('path');
const koaBody = require('koa-body');
const config = require('./config/config')
const app = new Koa();
const router = new Router();

// 导入自定义中间件
const islogin = require('./middleware/isLogin');

// 导入控制器
const login = require('./controller/login');
const teacher = require('./controller/teacher');
const course = require('./controller/course');

// 允许跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin','*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
})

app.use(Static(path.resolve(__dirname,"./public")));
app.use(koaBody());
app.use(islogin); // 登录校验

router.post('/login', login);

router.post('/teacher/add',teacher.addteacher);
router.post('/teacher/remove',teacher.removeteacher);
router.get('/teacher/list',teacher.teacherlist);
router.post('/teacher/update',teacher.updateteacher);

router.post('/course/add', course.addCourse);
router.post('/course/remove', course.removeCourse);
router.post('/course/list', course.findCourse);
router.post('/course/update', course.updateCourse);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.DefaultPort);

console.log('app run port: ',config.DefaultPort);