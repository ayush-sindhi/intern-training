// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send("hello world")
// });
// app.listen(4000);

const express=require('express');
const app=express();
const {greet,greetMessage}=require("./products");

app.use(greet);
greetMessage();

app.get('/',(req,res)=>{
    res.send("get method");
});
app.listen(4000);