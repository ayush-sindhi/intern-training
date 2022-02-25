// const os=require('os');
// console.log(os.type())
// const path=require('path')
// console.log(os.userinfo());
// console.log(os.uptime());
// console.log(os.freemem());
// console.log(os.totalmem());

// console.log(os.tmpdir());
// console.log(os.arch());
// console.log(path.extname('.index.md'));
// console.log(path.normalize('C://temp////foo//bar//..//'));

// const{
//     readFileSync,
//     writeFileSync,
//     appendFileSync,
//     unlinkSync,
// }=require('fs');
// //read file
// const readOp=readFileSync('./test.txt','utf-8');
// //write file
// writeFileSync('test.txt','this is the test file');
// //append files
// appendFileSync('test.txt','we have created');
// writeFileSync('test.txt','just now',{flag:'a'});
// //delete file
// unlinkSync('./test.txt');
// console.log(readOp);


// const sumMod=require("./myMode");
// const sumIs=sumMod(1,2,3)
// // console.log(sumMod);
// console.log(sumIs);

// run `node index.js` in the terminal

// const { sum, sub, mul, div, isprime } = require('./test.js');
// console.log(sum(1, 2, 3));
// console.log(sub(11, 1));
// console.log(mul(1, 2, 3, 4));
// console.log(div(11, 2));
// console.log(isprime(11));

// const{readFile, writeFile}=require('fs');
// const readOp=readFile('./xyz.txt', 'utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });
// const writeOp=writeFile('./xyz.txt',' i am good wbu?',(er,res)=>{
// if(er){
//     console.log(err);
// }
// console.log(res);
// });
// console.log(readOp);
// console.log('hello');
// console.log(writeOp);

// const url=require('url');
// const parseUrl=url.parse('https://www.npmjs/search?q=nodemon',true);
// console.log(parseUrl);
// const url=require('http');
// const server=url.createServer((req,res)=>{
//     res.write('welcome');
//     res.end();
// });
// server.listen(4000);
// console.log(url);


const http=require("http");
const url=require("url");
const fs=require("fs");
const server =http.createServer((req,res)=>{
    const path=req.url;
    if(path=="/"){
        res.writeHead(200,{
            "content-type":"text/html",
        });
        const filedata=fs.readFileSync("./index.html");
        res.write(filedata);
        res.end();
    }
    else if(path=="/home"){
        res.writeHead(200,{
            "content-type":"text/html",
        });
        const hCont=fs.readFileSync("./home.html");
        res.write(hCont);
        res.end();
    }
    else if(path=="/contact"){
        res.writeHead(200,{
            "content-type":"text/html",
        });
        const conCont=fs.readFileSync("./contact.html");
        res.write(conCont);
        res.end();
    }
    else if(path=="/features"){
        res.writeHead(200,{
            "content-type":"text/html",
        });
        const fCont=fs.readFileSync("./features.html");
        res.write(fCont);
        res.end();
    }
    console.log(path);
});
server.listen(4000);