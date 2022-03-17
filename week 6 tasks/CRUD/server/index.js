const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userModel=require('./models/users');
app.use(express.json());

//connecting with the database
mongoose.connect("mongodb://localhost:27017/crudTut",{useNewUrlParser:true});
