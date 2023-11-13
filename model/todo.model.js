const mongoose = require('mongoose');
const userModel = require('../model/user.model');
const db = require('../config/database');

const{Schema} = mongoose;

const toDoSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: userModel.modelName
    },
    title:{
        type: String,
        required: true, 
    },
    status:{
        type: Boolean,
        default: false
    }
});

const todoModal = db.model('todo', toDoSchema);

module.exports = todoModal;