module.exports = function(request, response, next){
    
   const auth= request.headers.authorization;  
    const jwt = require('jsonwebtoken'); 
    const config = require('../config/auth.json'); 

    console.log(auth); 
    //verificando a existência do token
    if(!auth){
        return response.status(401).send({ error: "You need a token"});
    }

    const tokenparts = auth.split(" "); 
    if(!(tokenparts.length == 2)){
        return response.status(401).send({ error: "Token doesn't have 2 parts"});
    }
    const [pre, token ] = tokenparts; 
    if(!/^Bearer$/i.test(pre)){
        return response.status(401).send({ error: "Wrong format"});
    }
    
    jwt.verify(token, config.code, function(error, decoded){
        if(error){
            return response.status(401).send({ error: "Invalid token"});
        }
        request.userOk.id = decoded.id; 
        return next(); 
    })
}; 