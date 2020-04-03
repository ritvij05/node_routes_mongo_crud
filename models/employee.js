const mongooes = require('mongoose');
const Schema   = mongooes.Schema;

// Create Schema
const employee_Schema = new Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required: true
    },
    gender:{
        type:String,
        enum:['Male','Female'],
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongooes.model('employee_data',employee_Schema);
