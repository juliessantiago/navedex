const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

require('../controllers/adminControl')  (app); //É possível simplificar através do Consign  
require('../controllers/naversControl') (app)
app.listen(5000, function(){
    console.log('Servidor on'); 
}); 
