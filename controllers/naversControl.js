const express = require ('express'); 
const router = express.Router();  
const authenticationMiddle = require('../middlewares/authenticationMiddle');  

const naver = require('../models/navers'); //carregando módulos de acesso ao banco
const project = require('../models/projects'); 


router.get('/index', authenticationMiddle, async function(request, response) {
    response.send("autenticado, ok"); //lista todos os navers
}); 

router.get('/showOne:naverId', authenticationMiddle, async function(request, response) {
    response.send(request.userId);//mostra naver específico através do seu identificador
}); 

router.post('/createNaver', authenticationMiddle, async function(request, response) {
    try{
        const newNaver = await Naver.create(request.body); 
        response.send({ newNaver }); 
    }
    catch(error){
        response.status(400).send({error: 'Impossible to create new Naver' }); 
    }
}); 


module.exports = function(app){
    app.use(authenticationMiddle, router) 
};  