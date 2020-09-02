const mongoose = require('../database/index'); 
const bcrypt = require('bcryptjs'); 
//navers participam de projetos

const naverSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    startedAt: {
        type: Date, 
        require: true, 
        default: Date.now, 
    },
    description: {
        type: String, 
        require: false,
    }, 
    navers[{ 
       type: mongoose.Schema.Types.ObjectId, 
        ref: 'naver', 
        require: true,
    }]//cada projeto é realiado por mais de um naver

})

const  Project = mongoose.model('project', adminSchema);

module.exports = Project; 