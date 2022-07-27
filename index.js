//Will use this file to connect to the database

const mongoose = require("mongoose");

//try making a connection to the mongodb

mongoose.connect("mongodb://localhost/mongoosedemo",()=>{
    console.log("connected to database")
}, err=>{
    console.log("Error",err);
});

const Student = require('./models/students.model');
/**
 * database opreation
 */
async function dbOpreation(){

    await Student.collection.drop(); //Drop the existing collection
    const student = await Student.create({
        name: "jipin",
        age: 21,
        email : "jipin123@gmail.com",
        subject : ["Mathematics","physics"],
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "New street",
            city : "pndore",
            country : "India",
            pinCode : 560103
        }
    });
    const student1 = await Student.create({
        name: "eipin",
        age: 21,
        email : "eipin123@gmail.com",
        subject : ["Mathematics","physics"],
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "New street",
            city : "endore",
            country : "India",
            pinCode : 560103
        }
    });
    const student2 = await Student.create({
        name: "ripin",
        age: 21,
        email : "ripin123@gmail.com",
        subject : ["Mathematics","physics"],
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "New street",
            city : "rndore",
            country : "India",
            pinCode : 560103
        }
    });
    const student3 = await Student.create({
        name: "tipin",
        age: 21,
        email : "tipin123@gmail.com",
        subject : ["Mathematics","physics"],
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "New street",
            city : "tndore",
            country : "India",
            pinCode : 560103
        }
    });
    const student4 = await Student.create({
        name: "uipin",
        age: 21,
        email : "uipin123@gmail.com",
        subject : ["Mathematics","physics"],
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "New street",
            city : "undore",
            country : "India",
            pinCode : 560103
        }
    });
    const student5 = await Student.create({
        name: "sipin",
        age: 21,
        email : "sipin123@gmail.com",
        subject : ["Mathematics","physics"],
        address : {
            lane1 : "l1",
            lane2 : "l2",
            street : "New street",
            city : "sndore",
            country : "India",
            pinCode : 560103
        }
    });
    console.log(student);
    console.log(student1);
    console.log(student2);
    console.log(student3);
    console.log(student4);
    console.log(student5);


       //Using mongoose..search a record based on id
       const studentId = await Student.findById("62e17b24a12571464e74054c");
       console.log(studentId);

       //Using mongoose..search a record based on name
       const studentName = await Student.findOne({name : "sipin"});
       console.log(studentName);
       
       //Using mongoose..delete a record based on name
       const studentDel = await Student.deleteOne({name : "tipin"});
       console.log(studentDel);
    
       //Using the where clause
       //student who's age greater than 20 
       //student who's name is particular 

       const studentAge = await Student.where("age").gt(20).where("name").equals("eipin");
       console.log(studentAge); 
    

} 

//execute the function
dbOpreation();