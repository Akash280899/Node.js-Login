const express=require('express');

const route=express.Router();

const dbs=require('../database/db');

const path=require('path');

const Controllogin=require('../controller/login');

const Controlregister=require('../controller/register');

const Controlforgot=require('../controller/forgot');

const Controlreset=require('../controller/reset');

route.post('/success',Controllogin.getlogin);

route.post('/register',Controlregister.getregister);

route.post('/forgot',Controlforgot.getforgot);

route.post('/update',Controlreset.getresetpass);
 
route.get('/login', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../',"public",'login.html'));
});

route.post('/register',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../',"public",'login.html'));
});

route.get('/admin', async(req,res,next) => {
    const [very]=await dbs.execute('select * from users');
    let g=very.length;
    console.log(g);
        res.json(very);
    
});

module.exports=route;
