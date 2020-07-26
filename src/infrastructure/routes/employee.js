
const Router = require('koa-router');
const EmployeeController = require('../controllers/employeeController');

const router = new Router();

router.get('/api/employees', async (ctx) => {

    ctx.status = 200;
    return ctx.response.body = await EmployeeController.GetEmployees();
});

router.get('/api/employee/{:id}', async (ctx) => {

    ctx.status = 200;
    return ctx.response.body = await EmployeeController.GetEmployeeById(ctx.params.id);
});

router.post('/api/employee', async (ctx) =>{
    
    let employeeResult = await EmployeeController.AddEmployee(ctx.request.body);
    ctx.status = 201;

    return ctx.response.body = employeeResult;
});


module.exports = router;
