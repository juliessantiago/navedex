const mongoose = require('../database/index'); 

//criando coleção para fazer autoincrement 

const naverSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    admission: {
        type: Date, 
        require: true, 
        default: Date.now, 
    },
    job: {
        type: String, 
        require: true, 
    },
    password: {
        type: String, 
        require: true, 
    }

})
const  Naver = mongoose.model('naver', naverSchema); 
module.exports = Naver; 