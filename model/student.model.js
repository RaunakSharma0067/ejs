let mongoose=require('mongoose')

let studentSchema=mongoose.Schema({
name:{
    type:String
},
email:String,
phone:String,
course:String
});

let student=mongoose.model("student",studentSchema);  // ✅ Fix 6: new hataya

module.exports=student;