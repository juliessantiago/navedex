const express = require ('express'); 
const router = express.Router();  
const authenticationMiddle = require('../middlewares/authenticationMiddle'); 

router.use(authenticationMiddle); 
router.get('/index', (request, response) => {
    response.send('ok'); 
}); 


module.exports = function(app){
    app.use('/navers', router)
};  