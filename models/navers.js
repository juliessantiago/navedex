const mongoose = require('mongoose'); 

const naverSchema = new mongoose.Schema({
    id:{
        type: int; //integer?
        require: true; 
    }, 
    name: {
        type: String;
        require: true;
    },
    admission: {
        type: Date; 
        require: true; 
    },
    job: {
        type: String; 
        require: true; 
    },
    password: {
        type: String; 
        require: true; 
    }

})