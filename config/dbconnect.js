let mongoose=require('mongoose')
let connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/LibraryManagementSystem')  
    .then(()=>console.log('Database Connection Success'))
    .catch((err)=>console.log('Database Error: '+err))
}
module.exports=connectDB;