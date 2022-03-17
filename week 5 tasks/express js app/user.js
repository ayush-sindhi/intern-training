const {Router}=require('express');
const express=require('express');
const router= express.Router();

router.get('/',(req,res,next)=>{
    res.send("this is the users page");
    next();
})
router.get('/user-details',(req,res)=>{
    res.send("this is the user-detail page");
    next();
})

module.exports=router;