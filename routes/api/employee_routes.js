// const express = require('express');
// const router  = express.Router();

// //  Item Model
// const employee_data = require('../../models/employee');


// // @routes Get All Employee Data
// router.get('/',(req,res)=>{
//     // employee_data.find()
//     //     .then(data=> res.json(data))
//     res.render("pages/index");
// });


// // @routes ADD employee data
// router.post('/',(req,res)=>{
//     const newData = new employee_data({
//         name   : req.body.name,
//         age    : req.body.age,
//         gender : req.body.gender,
//         contact: req.body.contact,
//         email  : req.body.email
//     });
//     newData.save()
//     .then(data=> res.json(data))
//     .catch((error)=>res.send(error)); 
// });

// // @routes Delete employee data
// router.delete('/:id',(req,res)=>{
//     employee_data.findById(req.params.id)
//         .then(data=> data.remove().then(()=>res.send("successful")))
//         .catch((error)=>res.send("unsuccessful"));
//     });

// // @routes Update employee data
// // router.put('/:id',(req,res)=>{
// //         const newData = ({
// //             name   : req.body.name,
// //             age    : req.body.age
// //         });
// //         employee_data.findById(req.params.id)
// //         .then(data=> data.updateOne(newData).then(()=>res.send("successful")))
// //         .catch((error)=>res.send(error)); 
// //     });

// // // @routes Update employee data
// router.put('/:id',(req,res)=>{
//             const newData = ({
//             name   : req.body.name,
//             age    : req.body.age
//         });
//     employee_data.updateOne({_id: req.params.id},{$set:{...employee_data,name:newData.name,age:newData.age}})
//     .then(()=>res.json({success:true}))
//     .catch((error)=>res.jason(error)); 
// });


// module.exports = router;