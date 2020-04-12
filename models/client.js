const mongooes = require('mongoose');
const Schema   = mongooes.Schema;

const client_Schema = new Schema({
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
    company_name:{
        type:String,
        default:null
    },
    company_type:{
        type:String,
        default:null
    },
    employee_count:{
        type:Number,
        default:null
    },
    company_location:{
        type:String,
        default:null
    },
    designation:{
        type:String,
        default:null
    }

});

module.exports = mongooes.model('client_data',client_Schema);