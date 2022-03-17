const mongoose=require('mongoose');
//creating the Schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

const userModel=mongoose.model('users',userSchema);

module.exports=userModel;