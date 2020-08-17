const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

app.set(bodyParser.json()); 
app.set(bodyParser.urlencoded({extended: true})); 

app.get('/', function(request, response){
    response.send('Página inicial')
})
app.listen(5000, function(){
    console.log('Servidor on'); 
}); 
