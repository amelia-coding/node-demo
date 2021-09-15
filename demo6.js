const heapdump = require('heapdump')
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

//ps -ef | grep node
//kill -USR2 <pid>