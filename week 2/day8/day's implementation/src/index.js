//implementation 1
// let fu = false;
// let ok = new Promise(function (resolve, reject) {
//   if (fu) resolve("fulfilled by fu");
//   else reject("rejected by fu");
// });
// ok.then(function prom(result) {
//   console.log(result);
// })
//   .catch(function prm(result) {
//     console.log(result);
//   })
//   .finally(() => {
//     console.log("this is finally");
//   });
// console.log(ok);

//implementation 2
// console.log("start");
// let n = false;
// let p = new Promise(function (res, rej) {
//   setTimeout(function () {
//     if (n) {
//       res("Resolved");
//     } else {
//       rej("Rejected");
//     }
//   }, 4000);
// });
// async function fun() {
//   let result = "";
//   try {
//     console.log("This is try block");
//     result = await p;
//     console.log(result);
//   } catch (error) {
//     console.log("Error occured" + result);
//   }
// }
// fun();
//implementation 3
// let info = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((respo) => respo.json());
// async function asfun() {
//   let res = await info;
//   console.log(res);
// }
// asfun();
//implementation 4 we need to get only username
// let info = fetch("https://jsonplaceholder.typicode.com/users").then((respo) =>
//   respo.json()
// );
// async function asfun() {
//   let res = await info;
//   res.map((it) => {
//     console.log(it["username"]);
//   });
// }
// asfun();
