import Koa from 'koa';
import views from 'koa-views';
import path from 'path';


const app = new Koa();

var router = require('koa-router')();

app.use(require('koa-static')(path.join(__dirname, '../build')));

app.use(views(path.join(__dirname, '../views'), {
  extension: 'html'
}));


app.use(async (ctx, next) => {  //log the http date;
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx, next) => {
  console.log(ctx.path,ctx.url);
  await next();
});
// response
app.use(async (ctx,next)=>{
  await ctx.render('index.html');
  await next(); 
})


app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(3011);