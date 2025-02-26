

const http = require('http');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const positionRouter = require('./src/infrastructure/routes/position');
const employeeRouter = require('./src/infrastructure/routes/employee');
const materialRouter = require('./src/infrastructure/routes/material');
const furnitureRouter = require('./src/infrastructure/routes/furniture');

const mongoConnect = require('./src/infrastructure/mongoose/mongoose');

mongoConnect().then(() =>{
    console.log("connected to mongo");
}).catch(err => {
    console.log(err);
});

app.use(bodyParser());

app.use(positionRouter.routes());
app.use(employeeRouter.routes());
app.use(materialRouter.routes());
app.use(furnitureRouter.routes());

http.createServer(app.callback()).listen(3000, () =>{
    console.log("application listen on port 3000");
});

