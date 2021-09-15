const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

//ab -c 100 -n 1000 http://localhost:3000/
//ab -t 15 -c 100  http://localhost:3000/