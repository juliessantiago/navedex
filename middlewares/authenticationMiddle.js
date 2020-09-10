module.exports = function(request, response, next){
    const jwt = require('jsonwebtoken'); 
    const config = require('../config/auth.json'); 
   const auth= request.headers.authorization;  
    
   if(!auth){
       return response.status(401).send({error : 'Restrict area. Token not provided'}); 
   }

   /* const parts = auth.split(' '); 

   if(!(parts.length === 2)){
       return response.status(401).send({error: 'Missing parts'}); 
   }

   const [pre, token] = parts; 

   if (!/^Bearer$/i.test(pre)){
      return response.status(401).send({error: 'Incorrect format'}); 
   }
   */ 
   jwt.verify(auth, config.code, function (error, decoded){
       if(error){
           return response.status(401).send({error: 'invalid token'})
       }
       request.userId = decoded.id; 
       return next(); 
   })
}