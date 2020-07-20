

const Router = require('koa-router');

const PositionController = require('../controllers/positionController');

const router = new Router();

router.get('/api/position', async (ctx) =>{
    return ctx.body = "test";
});

router.post('/api/position', async (ctx) =>{
    console.log(PositionController)
    let positionResult = PositionController.addPosition(ctx.request.body);

    ctx.response.body = positionResult;

    return ctx;
})

module.exports = router;