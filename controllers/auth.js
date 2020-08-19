const express = require ('express'); 
const  naver = require('../models/navers'); //naver = objeto do Mongoose 
const { response, request } = require('express');
 const router = express.Router(); //Classe para criar manipuladores de rota 

 router.post('/register', async (request, response) => {
   try{
      const objNav = await naver.create(request.body)
      return response.send({objNav}); 
   }
   catch(error) {
     ("Erro: Não foi possível registrar"); 
   }; 
 })
 
  module.exports = function(app){
    app.use('/authentication', router); 
  }; 
  