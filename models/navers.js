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
    } //cada naver é supervisionado por somente um administrador

})
adminSchema.pre('save', async function(next){
    const encript = await bcrypt.hash(this.password, 5); 
    this.password = encript; 
    next(); 
})

const  Naver = mongoose.model('naver', adminSchema); //nome pelo qual será referenciado

module.exports = Naver; 