let express = require('express');
let app=express();

app.set('view-engine','ejs')
app.get('/',(req,res)=>{
    res.send('server is ok.')
})

app.get('/user',(req,res)=>{
    res.render('user',{title:"user page",msg:"hello this is message"})
})

let PORT=3456;

app.listen(PORT,()=>{
console.log(`server running om port http://localhost:${PORT}/`)
})
