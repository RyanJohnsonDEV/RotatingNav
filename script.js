const nav = document.querySelector(".circle");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");

nav.addEventListener("click", function () {
  container.classList.toggle("show-nav");
  circle.classList.toggle("rotate");
});
