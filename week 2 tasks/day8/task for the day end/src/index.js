var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  var ele = document.getElementById("i");
  if (ele.style.display === "flex") {
    ele.style.display = "none";
  } else {
    ele.style.display = "flex";
  }
});
