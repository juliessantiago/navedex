const mongoose = require('../database/index'); 
const bcrypt = require('bcryptjs'); 

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
    job: {
        type: String, 
        require: true, 
    },
    city: {
        type: String, 
        require: false, 
    }, 
    password: {
        type: String, 
        require: true, 
    }

})
naverSchema.pre('save', async function(next){
    const encript = await bcrypt.hash(this.password, 10); 
    this.password = encript; 
    next(); 
})

const  Naver = mongoose.model('naver', naverSchema);


module.exports = Naver; 