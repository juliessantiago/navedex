const express = require ('express'); 
const router = express.Router();  
const authenticationMiddle = require('../middlewares/authenticationMiddle'); 

router.use(authenticationMiddle); 
router.get('/index', (request, response) => {
    response.send('listando todos os navers'); 
}); 


module.exports = function(app){
    app.use('/navers', router)
};  