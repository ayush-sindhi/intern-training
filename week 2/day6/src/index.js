//implemetation 1
// var parEl = document.getElementById("mylist");
// console.log(parEl);
// var firstChild = parEl.firstElementChild;
// console.log(firstChild);
// var lastChild = parEl.lastElementChild;
// console.log(lastChild);
// var allChild = parEl.children;
// console.log(allChild);
// console.log(firstChild.nextElementSibling);

// var newEl = document.createElement("li");
// newEl.textContent = "oooyeah";
// parEl.replaceChild(newEl, parEl.firstElementChild.nextElementSibling);
// parEl.removeChild(parEl.lastElementChild);

//implementation 2
// var parEl = document.getElementById("app");
// parEl.setAttribute("class", "litr");
// console.log(parEl.hasAttribute("class"));
// console.log(parEl.getAttribute("class"));
// parEl.classList.add("dooo");

//implemetation 3
var parEl = document.getElementById("ok");
var btna = document.getElementById("red");
btna.addEventListener("click", function () {
  parEl.setAttribute("class", "new1");
});
var btnb = document.getElementById("blue");
btnb.addEventListener("click", function () {
  parEl.setAttribute("class", "new2");
});
var btnc = document.getElementById("orange");
btnc.addEventListener("click", function () {
  parEl.setAttribute("class", "new3");
});
