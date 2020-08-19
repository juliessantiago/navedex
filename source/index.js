const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

require('../controllers/auth')  (app); //É possível simplificar através do Consign  

app.get('/', function(request, response){ //Rota criada apenas para teste
    response.send('Página inicial'); 
})
app.listen(5000, function(){
    console.log('Servidor on'); 
}); 
