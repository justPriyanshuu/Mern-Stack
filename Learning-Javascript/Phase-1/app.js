let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");

let colors = ["red", "green", "yellow", "blue", "black", "white"];

btn1.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
btn2.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
btn3.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
btn4.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});

btn5.addEventListener("click", () => {
  let idx = Math.floor(Math.random() * colors.length);
  let color = colors[idx];
  document.body.style.backgroundColor = color;
});
