const express = require('express');
const router  = express.Router();

//  Item Model
const recruiter_data = require('../../models/recruiter');

// @routes Get All Employee Data
router.get('/',(req,res)=>{
    res.render("pages/recruiter");
});

// @routes Update recruiter Data
router.post('/recruiterUpdate',(req,res)=>{
    const name = {name:req.body.name};
    recruiter_data.findOneAndUpdate(name,{$set:{
        experience          : req.body.exp,
        relevant_experience : req.body.relevant_exp,
        designation         : req.body.designation,
        company_name        : req.body.company_name,
        company_location    : req.body.company_location,
        domain              : req.body.domain,
        working_hours       : req.body.working_hours,
        payment             : req.body.payment,
        working_location    : req.body.working_location}},{new:true})
    .then(data=> res.send("recruiter updated"))
    .catch((error)=>res.send("error")); 
});

module.exports = router;