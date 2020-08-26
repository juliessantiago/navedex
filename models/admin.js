const mongoose = require('../database/index'); 
const bcrypt = require('bcryptjs'); 

const adminSchema = new mongoose.Schema({
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
    password: {
        type: String, 
        require: true, 
    }

})
adminSchema.pre('save', async function(next){
    const encript = await bcrypt.hash(this.password, 10); 
    this.password = encript; 
    next(); 
})

const  Admin = mongoose.model('admin', adminSchema);


module.exports = Admin; 