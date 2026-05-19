let express=require('express')
let app=express()
let mongoose=require("mongoose")

app.set('view engine','ejs')

mongoose.connect('mongodb://localHost:27017/StudentCRUD')
.then(()=>console.log('Mongodb Connected Successfully'))
.catch((err)=>console.log("mongodb connection error"+err))
let studentSchema=mongoose.Schema({
name:{
    type:String
},
email:String,
phone:String,
course:String
});

let student=new mongoose.model("student",studentSchema);
app.use(express.urlencoded({extended:true}));

app.get('/',async(req,res)=>{
    let studentDetails = await student.find();
    res.render('home',{studentDetails});
})

let PORT=3456;

app.listen(PORT,()=>{
console.log(`server running om port http://localhost:${PORT}/`)
})