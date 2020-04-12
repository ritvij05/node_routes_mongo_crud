// const express = require('express');
// const router  = express.Router();
// //  Item Model
// const job_data = require('../../models/job_description');

// //  @routes Get Pages
// router.get('/',(req,res)=>{
//     // employee_data.find()
//     //     .then(data=> res.json(data))
//     res.render("pages/index");
// });

// // @routes Add Data
// router.post('/add_val',(req,res)=>{
//     console.log(req.body.job_id);
//     const newData = new job_data({
//          job_id      : req.body.job_id,
//          job_title   : req.body.job_title, 
//          department  : req.body.department, 
//          location    : req.body.location, 
//          job_shift   : req.body.job_shift, 
//          no_opening  : req.body.no_opening, 
//          exp_lvl     : req.body.exp_lvl, 
//          must_skills : req.body.must_skills, 
//          good_skills : req.body.good_skills, 
//          min_salary  : req.body.min_salary,
//          max_salary  : req.body.max_salary, 
//          job_desc    : req.body.job_desc, 
//          skills_desc : req.body.skills_desc, 
//          creator     : req.body.creator, 
//          collaborator: req.body.collaborator, 
//          interviewer : req.body.interviewer, 
//          hire_manager: req.body.hire_manager 
//     });

//     newData.save()
//     .then(data=> res.send('Successful'))
//     .catch((error)=>res.send(error)); 
// });

// // @routes delete Data
// router.post('/del_val',(req,res)=>{
//     job_data.findOne({job_id: req.body.job_id_del})
//         .then(data=> data.remove().then(res.send("Successful")))
//         .catch((error)=>res.send("Error"));
//     });

// // @routes Update employee data
// router.post('/up_val',(req,res)=>{
//     job_data.updateOne({job_id: req.body.job_id_up},{$set:{[req.body.field_name]:req.body.new_val}})
//     .then(()=>res.send("Successful"))
//     .catch((error)=>res.send(error)); 
    
// });




// module.exports = router;