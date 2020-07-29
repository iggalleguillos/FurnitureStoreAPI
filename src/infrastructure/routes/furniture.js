
const Router = require('koa-router');
const FurnitureController = require('../controllers/furnitureController');

const router = new Router();

router.get('/api/furniture/{:id}', async (ctx) => {
    
    ctx.status = 200;
    return ctx.response.body = await FurnitureController.getFurnitureById(ctx.params.id);
});

router.get('/api/furnitures', async (ctx) => {

    ctx.status = 200;
    return ctx.response.body = await FurnitureController.getFurnitures();
});

router.post('/api/furniture', async (ctx) => {

    ctx.status = 201;
    return ctx.response.body = await FurnitureController.addFurniture(ctx.request.body);
});


module.exports = router;