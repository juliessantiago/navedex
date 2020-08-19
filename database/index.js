const mongoose = require('mongoose'); 

if (mongoose.connect('mongodb://localhost:27017/navedex', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true})){
        console.log('Database connected'); 
    } 

module.exports = mongoose ; 
 
