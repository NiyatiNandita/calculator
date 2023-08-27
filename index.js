"use strict";
let display = document.getElementById("display-val");
let n = "";
for (var i = 0; i < 16; i++) {
  document.querySelectorAll(".num")[i].addEventListener("click", function () {
    display.innerText = display.innerText + this.innerText;
    n = display.innerHTML;
    console.log(n);
  });
}

function equal() {
  let ans = eval(n);
  display.innerHTML = ans;
  console.log(display.innerHTML);
  // const myArray = n.split("+");
  console.log(ans);
}

function del() {
  n = n.slice(0, -1);
  display.innerHTML = n;
  console.log(n);
}

function reset() {
  display.innerHTML = " ";
}

function togg() {
  let themebtn = document.querySelector(".theme");
  let lighttheme = document.querySelector(".display");
  let bodytheme = document.querySelector("body");
  let startl = document.querySelector(".start");
  let calcbody = document.querySelector(".calculator");
  let togbtn = document.querySelector(".ttt");
  // alert("theme change");
  themebtn.classList.toggle("darkmode");
  lighttheme.classList.toggle("light");
  calcbody.classList.toggle("light");
  bodytheme.classList.toggle("bodylight");
  display.classList.toggle("startlight");
  startl.classList.toggle("startlight");
  togbtn.classList.toggle("light");
}
