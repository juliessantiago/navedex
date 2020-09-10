const mongoose = require('../database/index'); 
const bcrypt = require('bcryptjs'); 
//navers participam de projetos

const projectSchema = new mongoose.Schema({
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
})

const  Project = mongoose.model('project', projectSchema);

module.exports = Project; 