const express=require('express');
const app=express();
app.use(express.json());

let userList=[
    {
        id:1,
        name:"ayush",
        email:"a@a.com"
    },
    {
        id:2,
        name:"hp",
        email:"h@h.com"
    },
    {
        id:3,
        name:"gp",
        email:"g@g.com"
    }
]
//GET
app.get("/users",(re,res)=>{
    res.send(userList);
})
//post
app.post("/users",(req,res)=>{
    const newUser=req.body;
    userList.push(newUser);
    res.json();
})
//DELETE
app.delete("/users/:id",(req,res)=>{
    const id=req.params.id;
    // console.log(id);
    const newList=userList.filter(item=>item.id!=id);
    userList=[...newList];
})
//PUT
app.put("/users",(req,res)=>{
    const newEmail=req.body.newEmail;
    userList.forEach(item=>item.email=newEmail);
})
//listen
app.listen(3001,()=>{
    console.log("server Running");
})