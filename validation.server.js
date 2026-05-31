let express=require('express')
let connectDB =require('./config/dbconnect.js')
const mongoose=require('mongoose')

let app=express();
app.set('view engine','ejs')

connectDB();
app.use(express.urlencoded({extended:true}))

let userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,'Name Must be Equal Or Greater Than 3 Characters Only'],
        maxlength:[20,'Name Must Be Smallar Or Equal To 20 Characters Only']
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
    type:String,
    enum:['admin','student'],
    default:'student'
}
})

let User=new mongoose.model('user',userschema)

app.get('/',(req,res)=>res.render('userpage'))

// app.post('/add-user',async(req,res)=>{
//     try{
//         let user=await User.create(req.body)
//         if(User)
//             res.send('User Saved SuccessFully')
//     }catch(err){
//         if(err.code==11000)
//             res.send('This Eamil Is Already Exists!')
//         else
//             res.send(err.message)

//     }   
// })

app.listen(5000,()=>{
    console.log('Server Is Running On http://localhost:5000')
})