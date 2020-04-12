const express = require('express');
const router  = express.Router();

//  Client Model
const client_data = require('../../models/client');

// @routes Get Client Page
router.get('/',(req,res)=>{
    res.render('pages/client');
});

// @routes Post Client Data
router.post('/clientUpdate',(req,res)=>{

    client_data.findOneAndUpdate({name:req.body.name},
        {$set:
            {
        company_name    : req.body.company_name,
        company_type    : req.body.company_type,
        employee_count  : req.body.employee_count,
        company_location: req.body.company_location,
        designation     : req.body.designation
            }
        },
        {new:true})
    .then(data=> res.send("Client Updated"))
    .catch((error)=>res.json(error)); 
});

module.exports = router;