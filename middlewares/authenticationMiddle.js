module.exports = function(request, response, next){
    
    const token= request.header.authorization; 
    const jwt = require('jsonwebtoken'); 
    const config = require('../config/auth.json'); 

    //verificando a existência do token
    if(!token){
        return response.status(401).send({ error: 'You need a token'})
    }else{
        jwt.verify(token, config.code, function(error, decoded) {
            if (error){
                return response.status(401).send('token invalid')
            }else{
                request.userId = decoded.id; //retornando o id do admin para a requisição inicial 
                return next(); 
            }
        })
    }
    //é válido realizar testes no tipo de token recebido antes da verificação final
    
    



}; 