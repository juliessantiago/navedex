const express = require ('express'); 
const router = express.Router();  
const authenticationMiddle = require('../middlewares/authenticationMiddle'); 

router.get('/index', authenticationMiddle, function(request, response) {
    response.send('Id do usuário autenticado: 'request.userId); 
}); 

module.exports = function(app){
    app.use('/navers', router)
};  