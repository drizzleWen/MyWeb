const koa = require("koa");
const router = require("koa-router")();

module.exports = function() {
    router.get('/', async(ctx, next) => {

    })
    return router;
}