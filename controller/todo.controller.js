const TodoService = require('../services/todo.services');
const todoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next)=>{
    try {
       const {userId,title} = req.body;
       let todo = await TodoService.createTodo(userId, title);
       res.json({status: true, message: "Berhasil menambahkan todo" , success: todo}); 
        
    } catch (error) {
        next(error);
    }
}

exports.getAllTodos = async (req, res, next) => {
    try {
       
       let todo = await todoModel.find({}); 
       if  (!todo) throw new Error ("Gagal mendapat todo")
       res.json({ status: true, success: todo });

    } catch (error) {
        next(error);
    }
}

exports.deleteTodoById = async (req, res, next) => {
    try {
        const {todoId} = req.param;

        let todo = await todoModel.deleteOne({todoId:todoId});
        res.json({status: true, message: "Berhasil menghapus todo"}); 
         
     } catch (error) {
         next(error);
     }
}

exports.updateTodo = async (req, res, next)=>{
    try {
       const {todoId} = req.param;

       const {title} = req.body;
       let todo = await todoModel.updateOne({todoId:todoId , title:title});
       res.json({status: true, message: "Berhasil mengupdate todo"}); 
        
    } catch (error) {
        next(error);
    }
}   

exports.getTodoById = async (req, res, next) => {
    try {
        const {todoId} = req.param;

        let todo = await todoModel.findOne(todoId);
        res.json({status: true, message: "Nih detailnya", data: todo}); 
         
     } catch (error) {
         next(error);
     }
}

exports.deleteAllTodo = async (req, res, next) => {
    try {

        let todo = await todoModel.deleteMany({});
        res.json({status: true, message: "Berhasil menghapus semuanya"}); 
         
     } catch (error) {
         next(error);
     }
}