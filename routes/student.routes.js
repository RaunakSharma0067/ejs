let router=require('express').Router();

let{
    showhome,           
    showdetailspage,
    addstudentpage,
    addstudent,
    editstudentpage,
    editstudent,
    deletestudent
}=require('../controller/student.controller.js')

router.get('/',showhome);                           // Home page

router.get('/show-details/:id',showdetailspage);   // Show details page

router.get('/add-student',addstudentpage);          // Add student form page

router.post('/add-student',addstudent);             // GET -> POST (form submit)

router.get('/edit-student/:id',editstudentpage);   // Edit student form page

router.post('/edit-student/:id',editstudent);      // GET -> POST (form submit)

router.get('/delete-student/:id',deletestudent);   // Delete student

module.exports=router;