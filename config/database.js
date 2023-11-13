const mongoose = require('mongoose');
const connection = mongoose.createConnection(process.env.DB_URL).on('open', ()=>{
    console.log('MongoDB Connected');
}).on('error', ()=>{
    console.log('MongoDb connection error');
});
module.exports = connection;