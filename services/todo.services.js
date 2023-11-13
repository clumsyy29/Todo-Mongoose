const todoModel = require('../model/todo.model');


class TodoService{
    static async createTodo(userId, title, desc){
        const createTodo = new todoModel({userId, title, desc});
        return await createTodo.save();
    }

    static async getTodoData(userId){
        const todoData = await todoModel.find({userId});
        return todoData;
    }

     static async deleteTodoData(_id){
        const deletedTodo = await todoModel.findOneAndDelete({_id: _id});
        return deletedTodo;
    }

      static async deleteTodoById(todoId) {
        try {
            const deletedTodo = await todoModel.findByIdAndDelete(todoId);
            return deletedTodo;
        } catch (error) {
            throw new Error("Gagal menghapus 'todo'");
        }
    }

    static async updateTodo(userId, title, desc){
        const updateTodo = new todoModel({userId, title, desc});
        return await updateTodo.updateOne();
    }
}

module.exports = TodoService;