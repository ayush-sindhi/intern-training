function cN(x) {
  if (x == 0) {
    alert("Enter another number than 0");
  } else if (x % 2 == 0) {
    console.log("It is EVEN!");
  } else {
    console.log("It is ODD!");
  }
}
cN(0);
cN(10);
cN(13);
var cn2 = function (x) {
  if (x == 0) console.log("enter another number other than 0");
  else if (x % 2 == 0) console.log("number is EVEN");
  else console.log("number is ODD");
};
cn2(0);
cn2(2);
cn2(9);
