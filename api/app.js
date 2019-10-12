const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static');
const path = require('path');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();

// 导入自定义中间件
const islogin = require('./middleware/isLogin');

// 导入控制器
const login = require('./controller/login');

app.use(Static(path.resolve(__dirname,"./public")));
app.use(koaBody());
app.use(islogin); // 登录校验

router.post('/login', login);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);