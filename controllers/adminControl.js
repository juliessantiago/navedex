const express = require ('express'); 
const  admin = require('../models/admin'); //naver = objeto do Mongoose 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const router = express.Router(); //Classe para criar manipuladores de rota 
//alterar depois para uso do Consign 
const config = require('../config/auth.json'); //arquivo que possui a identificação dessa API

router.post('/register', async (request, response) => {
   try{
     //Testar depois a  existência única do email
      const objAdmin = await admin.create(request.body)

      return response.send({objAdmin}); 
   }
   catch(error) {
     ("Erro: Não foi possível registrar"); 
   }; 
})
 
//nota: novo usuário após se registrar, deverá ir para a página de login 
//token não será gerado no registro 
router.post('/authenticate', async (request, response) =>{
     const { email, password} = request.body; 

     const userOK = await admin.findOne({ email }).select('+password'); 
     if (!userOK){
       return response.status(400).send({error: 'User not found'}); 
     } 

     if(!await bcrypt.compare(password, userOK.password)){ 
      return response.status(400).send({error: 'Invalid password'}); 
     }
     
     userOK.password = undefined; //impedindo exibição da senha 
     const token = jwt.sign({id: userOK.id}, config.code, {expiresIn: 3600})
     //primeiro parâmetro: id do usuário 
     //o segundo parâmetro é hash criado para identificar esta API
     //hash foi criado no arquivo auth.json
     //terceiro parâmetro: expiresIn = define tempo de validade do token em seg 

     response.send({userOK, token})
} )
 module.exports = function(app){
    app.use('/admin', router); 
}; 
  