let nav_links = document.querySelector(".nav_links");
// console.log(nav_links);
let bars = document.querySelector("#bars");
// console.log(bars);
bars.addEventListener("click", function () {
  nav_links.classList.toggle("show");
  bars.classList.toggle("fa-times");
});

window.addEventListener("scroll", function () {
  nav_links.classList.remove("show");
  bars.classList.remove("fa-times");
});