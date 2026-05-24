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
    let msg =req.query.msg;
    let studentDetails = await student.find();
    res.render('home',{studentDetails , msg});
})

app.get('/show-details/:id',async(req,res)=>{
    let id=req.params.id
    let stu=await student.findById(id)
    res.render('show-details',{stu})
})

app.get('/add-student',(req,res)=>res.render('add-student'))

app.post('/add-student',async(req,res)=>{
    let {name,email,phone,course}=req.body;
    let stu =await student.create({name,email,phone,course})
    if(stu)
        res.redirect('/?msg=Your Given Records Have Been Successfully Saved.')
})

app.get('/edit-student/:id',async(req,res)=>{
    let id=req.params.id
    let stu=await student.findById(id)
    res.render('edit-student',{stu})
})

app.post('/edit-student/:id',async(req,res)=>{
    let id=req.params.id;
    let stu=await student.findByIdAndUpdate(id,req.body)
    if(stu)
        res.redirect('/?msg=Your Given Records Have Been Successfully Updated.')
})

app.get('/delete-student/:id',async(req,res)=>{
    let id=req.params.id
    let stu=await student.findByIdAndDelete(id)
    if(stu)
        res.redirect('/?msg=Your Given Records Have Been Successfully Deleted.')
})


let PORT=3456;
app.listen(PORT,()=>{
console.log(`server running om port http://localhost:${PORT}/`)
})