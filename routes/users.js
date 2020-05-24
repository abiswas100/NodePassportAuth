const express  = require('express')


const router = express();


router.get('/users/login',(req,res)=>{
    res.render('Login');
})


router.get('/users/register',(req,res)=>{
    res.render('Register');
})


module.exports = router;