

const Router = require('koa-router');

const PositionController = require('../controllers/positionController');

const router = new Router();

router.get('/api/positions', async (ctx) =>{
    console.log("Access to get method on /api/positions")
    return ctx.response.body = await PositionController.getPositions();
});

router.get('/api/position/{:id}', async (ctx) =>{
    console.log("Access to get method on /api/position");

    return ctx.response.body = await PositionController.getPositionById(ctx.params.id);
});

router.post('/api/position', async (ctx) =>{
    console.log("Access to post method on /api/position")
    let positionResult = await PositionController.addPosition(ctx.request.body);

    ctx.response.body = positionResult;

    return ctx;
});


module.exports = router;