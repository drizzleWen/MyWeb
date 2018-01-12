const koa = require("koa");
const views = require("koa-views");
const koaRouter = require("koa-router");

var app = new koa();
var router = new koaRouter();


app.use(async(ctx, next) => {
    await next();
});

router.get("/", require())

app.use(router.routes());

app.listen(8080);