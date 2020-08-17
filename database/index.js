const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/navedex', {useMongoClient : true})

mongoose.Promise = global.Promise; 

module.exports = mongoose; 
