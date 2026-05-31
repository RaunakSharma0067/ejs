const express=require('express');
const app=express();
const connectDB=require('./config/dbconnect.js');


app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));

connectDB();

app.use(require('./routes/user.routes.js'));

app.listen(5045,()=>{
    console.log("server is running on http://localhost//5045")
});