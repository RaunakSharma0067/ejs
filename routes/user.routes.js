const router=require('express').Router();
const{
    registerPage,
    loginPage,
    register,
    login,
    homePage
} = require('../controller/user.controller.js');

router.get('/',homePage)
router.get('/register',registerPage)
router.post('/register',register)
router.get('/login',loginPage)
router.post('/login',login)

module.exports=router;