// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send("hello world")
// });
// app.listen(4000);

const express=require('express');
const app=express();
// const {greet,greetMessage}=require("./products");
const products=require('./products.js');
const user=require('./user.js');

// app.use(greet);
// greetMessage();

app.use('/user',user);

app.use('/products',products);
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/public/about.html`);
});
app.listen(4000);