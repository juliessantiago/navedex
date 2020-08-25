const express = require ('express'); 
const  naver = require('../models/navers'); //naver = objeto do Mongoose 
const { response, request } = require('express');//ajustar
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const router = express.Router(); //Classe para criar manipuladores de rota 
//alterar depois para uso do Consign 
const config = require('../config/auth.json'); 

router.post('/register', async (request, response) => {
   try{
     //Testar depois a  existência única do email
      const objNav = await naver.create(request.body)

      return response.send({objNav}); 
   }
   catch(error) {
     ("Erro: Não foi possível registrar"); 
   }; 
})
 

router.post('/authenticate', async (request, response) =>{
     const { email, password} = request.body; 

     const userOK = await naver.findOne({ email }).select('+password'); 
     if (!userOK){
       return response.status(400).send({error: 'User not found'}); 
     } 

     if(!await bcrypt.compare(password, userOK.password)){ 
      return response.status(400).send({error: 'Invalid password'}); 
     }
     
     userOK.password = undefined; //impedindo exibição da senha 
     const token = jwt.sign({id: userOK.id}, config.code, {
       expiresIn: 3600 
     } )
     //o segundo parâmetro é hash criado para identificar esta API
     //hash foi criado no arquivo auth.json
     //terceiro parâmetro: expiresIn = define tempo de validade do token em seg 

     response.send({userOK, token})
} )
 module.exports = function(app){
    app.use('/auth', router); 
}; 
  