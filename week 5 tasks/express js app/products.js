const express=require('express');

const greet=(req,res,next)=>{
    console.log(req.method);
    next();
}
const greetMessage=()=>{
    console.log("How are you?");
}

module.exports={greet,greetMessage};