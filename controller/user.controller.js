const User=require('../model/user.model.js');

let homePage=(req,res)=>{
    res.render('homePage')
};


let registerPage=(req,res)=>{
    res.render('registration')
};

let loginPage=(req,res)=>{
    res.render('login')
};

let register=async(req,res)=>{
  let{name,email,password,role}=req.body;
  await User.create({
    name,email,password,role
  });  
return res.render('login');
};

let login=async(req,res)=>{
    let {email,password}=req.body;
    let user=await User.findOne({email});
    if(!User)
        return res.send('Sorry Your Email In Invalid')
    if(user.password!==password)
        return res.send('Sorry You Have Entered Invalid Password')
    if(user.role==='admin')
        return res.render('adminpage')
    return res.render('userpage')
}

module.exports={
    registerPage,
    loginPage,
    register,
    login,
    homePage
};
