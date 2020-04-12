const mongooes = require('mongoose');
const Schema   = mongooes.Schema;

const recruiter_Schema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    user_type:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        default:null
    },
    relevant_experience:{
        type:Number,
        default:null
    },
    designation:{
        type:String,
        required:true.company_location,
        default:null
    },
    company_name:{
        type:String,
        default:null
    },
    company_location:{
        type:String,
        default:null
    },
    domain:{
        type:Array,
        default:null
    },
    working_hours:{
        type:Number,
        default:null
    },
    payment:{
        type:Number,
        default:null
    },
    working_location:{
        type:String,
        default:null
    }
});

module.exports = mongooes.model('recruiter_data',recruiter_Schema );