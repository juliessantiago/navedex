const mongoose = require('../database/index'); 
const bcrypt = require('bcryptjs'); 
//admins controlam navers e projetos 
//navers participam de projetos

const naverSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String, 
        require: true, 
        unique: true,
    },
    admission: {
        type: Date, 
        require: true, 
        default: Date.now, 
    },
    job_role: {
        type: String, 
        require: true,
    },
    birthDate: {
        type: Date, 
        require: false,
    },
    password: {
        type: String, 
        require: true, 
    }, 
    supervisedBy:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'admin', 
        require: true,
    }, //cada naver é supervisionado por somente um administrador
    projects: [{     
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project', 
        require: true,
    }], //Um naver pode participar em mais de um project
})

const  Naver = mongoose.model('naver', naverSchema); //nome pelo qual será referenciado

module.exports = Naver; 