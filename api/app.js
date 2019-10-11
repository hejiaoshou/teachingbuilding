const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static');
const path = require('path');
const app = new Koa();
const router = new Router();

app.use(Static(path.resolve(__dirname,"./public")));

router.all('*', (ctx, next) => {
  // 进入具体业务逻辑前的处理
  next()
});

router.get('/test', (ctx, next) => {
  ctx.body = {
    code: 0,
    msg: 'hello'
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);