const express = require('express');
require("dotenv").config()
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');
const todoRouter = require('./routers/todo.router');

app.use(bodyParser.json());

const port = 3000;

app.use('/', userRouter);
app.use('/', todoRouter);

app.get('/', (req, res)=>{
    res.send("oi");
});

app.listen(port, ()=>{
    console.log('Server Listening on port' + port);

});

module.exports = app; 