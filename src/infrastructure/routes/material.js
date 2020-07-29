

const Router = require('koa-router');
const MaterialController = require('../controllers/materialController');

const router = new Router();

router.post('/api/material', async (ctx) => {

    ctx.status = 201;
    return ctx.response.body = await MaterialController.addMaterial(ctx.request.body);
});

router.get('/api/material/{:id}', async (ctx) => {

    ctx.status = 200;
    return ctx.response.body = await MaterialController.getMaterialById(ctx.params.id);
});

router.get('/api/materials', async (ctx) => {

    ctx.status = 200;
    return ctx.response.body = await MaterialController.getMaterials();
});

router.post('/api/material/{:id}/stock', async (ctx) => {

    ctx.status = 201;
    return ctx.response.body = await MaterialController.addMaterialStock(ctx.params.id, ctx.request.body.amount);
});

module.exports = router;