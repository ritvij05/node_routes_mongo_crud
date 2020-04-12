const express = require('express');
const router  = express.Router();

//  Client Model
const client_data = require('../../models/client');
const recruiter_data = require('../../models/recruiter');

//@routes Get Login Page

// @routes Get Register Page
router.get('/',(req,res)=>{
    res.render("pages/index");
});


// @routes Adding data into client model
router.post('/clientReg',(req,res)=>{
    const newData = new client_data({
        name      : req.body.name,
        username  : req.body.username,
        email     : req.body.email,
        password  : req.body.password,
        user_type : req.body.user_type
    });
    newData.save()
    .then(data=> res.send("client added"))
    .catch((error)=>res.send("error")); 
});

// @routes Adding data into recruiter model
router.post('/recruiterReg',(req,res)=>{
    const newData = new recruiter_data({  
        name      : req.body.name,
        username  : req.body.username,
        email     : req.body.email,
        password  : req.body.password,
        user_type : req.body.user_type
    });
    newData.save()
    .then(data=> res.json("recruiter added"))
    .catch((error)=>res.send("error")); 
});


module.exports = router;