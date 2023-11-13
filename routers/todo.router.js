const router = require('express').Router();
const todoController = require('../controller/todo.controller');
const todoModel = require('../model/todo.model')

router.get('/getAllTodos', todoController.getAllTodos);

router.get('/getTodoById/:todoId', todoController.getTodoById ); 

router.post('/createtodo', todoController.createTodo );

router.put('/updateTodo/:todoId', todoController.updateTodo ); 

router.delete('/deleteTodoById/:todoId', todoController.deleteTodoById );

router.delete('/deleteAllTodo', todoController.deleteAllTodo );

module.exports = router;