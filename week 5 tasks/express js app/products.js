const express=require('express');
// const router= express.router('./products');
const router= express.Router();

// const greet=(req,res,next)=>{
//     console.log("Hi");
//     next();
// }
// const greetMessage=(req,res,next)=>{
//     console.log("How are you?");
//     next();
// }

// module.exports={greet,greetMessage};

router.get('/',(req,res)=>{
    res.send("this is the products page")
})
router.get('/product-details',(req,res)=>{
    res.send("this is the details page")
})

module.exports=router;