let student=require('../model/student.model.js')

let showhome=async(req,res)=>{
    let msg =req.query.msg;
    let studentDetails = await student.find();
    res.render('home',{studentDetails , msg});
}

let showdetailspage=async(req,res)=>{
    let id=req.params.id
    let stu=await student.findById(id)
    res.render('show-details',{stu})
}

let addstudentpage=(req,res)=>res.render('add-student')

let addstudent=async(req,res)=>{
    let {name,email,phone,course}=req.body;
    let stu =await student.create({name,email,phone,course})
    if(stu)
        res.redirect('/?msg=Your Given Records Have Been Successfully Saved.')
}

let editstudentpage=async(req,res)=>{
    let id=req.params.id
    let stu=await student.findById(id)
    res.render('edit-student',{stu})
}

let editstudent=async(req,res)=>{
    let id=req.params.id;
    let stu=await student.findByIdAndUpdate(id,req.body)
    if(stu)
        res.redirect('/?msg=Your Given Records Have Been Successfully Updated.')
}

let deletestudent=async(req,res)=>{
    let id=req.params.id
    let stu=await student.findByIdAndDelete(id)
    if(stu)
        res.redirect('/?msg=Your Given Records Have Been Successfully Deleted.')
}
module.exports={
    showhome,
    showdetailspage,
    addstudentpage,
    addstudent,
    editstudentpage,
    editstudent,
    deletestudent
}

