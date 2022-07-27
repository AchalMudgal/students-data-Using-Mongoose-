const mongoose = require("mongoose");

/*
Student ->
        name
        age
*/


const addressSchema = new mongoose.Schema({
    lane1 : String,
    lane2 : String,
    street : String,
    city : String,
    pinCode : Number

})
const studentsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        min : 16
    },
    email: {
        type : String,
        required : true,
        unique : true,
        minLength : 10,
        lowercase : true
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : ()=>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    },
    subject : {
        type : [String],
        //custom validation
        validate : {
            validator : s => s.length != 0,
            message : props => "subject list can't be empty"
        }
    },
    address : addressSchema  //Embedded Document 
});

module.exports = mongoose.model("Student",studentsSchema);