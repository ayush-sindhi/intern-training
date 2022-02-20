import React from "react";
import reactDom from "react-dom";
// class Greet extends React.Component{
//   render(){
//     return <h1>Hello</h1>
//   }
// }
// reactDom.render(<Greet/>,document.getElementById('root'));


// const Element=()=>{
//   const fName="Ayush"//dynamic data
//   return (
//   <>
//     <h1 className="PrimaryText">Hello, {fName}</h1>
//     <h1>welcome</h1>
//   </>
//   )
// }
// reactDom.render(<Element/>,document.getElementById('root'));


// const Element=()=>{
//   const num=20;
//   if(num%2==0)
//   return <h1>even</h1>
//   else
//   return <h1>odd</h1>
// }
// reactDom.render(<Element/>,document.getElementById('root'));


// const Element=()=>{
//   const count=5;
//   return (
//   <>
//     {/* <h1 className={count>4?'text-primary':'text-warning'}>Hello</h1> */}
//     <h1 className={`.text-primary ${count<4?'text-warning':'text-danger'}`}>ok</h1>
//     <h1>welcome</h1>
//   </>
//   )
// }
// reactDom.render(<Element/>,document.getElementById('root'));


// const Element=()=>{
//     let arr=[1,2,3,4,5,6];
//     return (
//       <h1 className='arr'>{arr.map((item)=>`${item}`)}</h1>
//     )
//   }
//   reactDom.render(<Element/>,document.getElementById('root'));


import App from "./App";
const Element=()=>{
        return <App/>
      }
      reactDom.render(<Element/>,document.getElementById('root'));