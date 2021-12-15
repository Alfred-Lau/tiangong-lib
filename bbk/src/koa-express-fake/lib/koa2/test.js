const Koa = require('./like-koa2');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  console.log('first');
  await next();

  console.log('first--');

  const rt = ctx['X-Response-Time'];
  console.log(`${ctx.req.method} ${ctx.req.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log('second');
  await next();

  console.log('second --');

  const ms = Date.now() - start;
  ctx['X-Response-Time'] = `${ms}ms`;
});

// response
app.use(async ctx => {
  ctx.res.end('This is like koa2');
});

app.listen(8000);