import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// let sales_tax = 12;
// let salesTaxForCurrentYear = 50;
// console.log(salesTaxForCurrentYear, sales_tax);
// var two = -12.89;
// var name = "jomin";
// var tax;
// var iftrue = true;
// two += 1;
// console.log(two * 2, name, tax, iftrue);

// var input1 = 10;
// var input2 = 12;
// console.log(
//   input1 + input2,
//   input1++,
//   input2--,
//   input1 * input2,
//   input1 / input2,
//   input2 - input1
// );

// function add(a, b) {
//   console.log(a + b);
// }
// add(input1, input2);
// //sub(12,10); error sub is not a function
// var sub = function (a, b) {
//   console.log(a - b);
// };
// sub(12, 10);
// var multiply = (a, b) => {
//   console.log(a * b);
// };
// multiply(2, 4);
// //IIFE
// (function () {
//   console.log("hi");
// })();

// function divide(a, b) {
//   return a / b;
// }
// console.log(divide(6, 2));

// isEven(4);
// isEven(5);
// function isEven(a) {
//   if (a % 2 === 0) console.log(true);
//   else console.log(false);
// }

// var isOdd = function (a) {
//   if (a % 2 === 1) console.log(true);
//   else console.log(false);
// };
// isOdd(4);
// isOdd(5);

// var newArray = [1, 2, 3, 4, "hello", true];
// console.log(newArray);

var FirstTarget = document.getElementById("app");
console.log(FirstTarget);
var SecondTarget = document.getElementsByTagName("p");
var ThirdTarget = document.getElementsByClassName("para");
var FourthTarget = document.querySelector(".para");
var FifthTarget = document.querySelector("#app");
var SixthTarget = document.querySelectorAll(".para");
console.log(SecondTarget);
console.log(ThirdTarget);
console.log(FourthTarget);
console.log(FifthTarget);
console.log(SixthTarget);

var ChildElement = document.getElementById("para");
console.log(ChildElement);
console.log(ChildElement.parentNode);
var parentEl = document.getElementById("app");
console.log(parentEl.firstChild);
console.log(parentEl.firstElementChild);
console.log(parentEl.lastElementChild);
console.log(parentEl.nextElementSibling);
console.log(parentEl.previousElementSibling);
