const mongooes = require('mongoose');
const Schema   = mongooes.Schema;


const job_Schema = new Schema({

   job_id:{
       type:Number,
       required:true
   },
   job_title:{
       type:String,
       required:true
   },
   department:{
    type:String,
    required:true
    },
    location:{
        type:String,
        required:true
    },
    job_shift:{
        type:String,
        required:true
    },
    no_opening:{
        type: Number,
        required:true
    },
    exp_lvl:{
        type:String,
        required:true
    },
    must_skills:{
        type:String,
        required:true
    },
    good_skills:{
        type:String,
        required:true
    },
    min_salary:{
        type:String,
        required:true
    },
    max_salary:{
        type:String,
        required:true
    },
    job_desc:{
        type:String,
        required:true
    },
    skills_desc:{
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    },
    collaborator:{
        type:String,
        required:true
    },
    interviewer:{
        type:String,
        required:true
    },
    hire_manager:{
        type:String,
        required:true
    }
   
});

module.exports = mongooes.model('job_data',job_Schema);