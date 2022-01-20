const sidebar = document.querySelector(".sidebar");
const burgerButton = document.querySelector(".header__burger-button");
const closeButton = sidebar.querySelector(".sidebar__close");
const mask = document.querySelector(".white-mask");
const body = document.querySelector("body");

burgerButton.addEventListener("click", function () {
  sidebar.classList.add("sidebar--show");
  mask.classList.add("white-mask--show");
  body.classList.add("body--overflow");
});
closeButton.addEventListener("click", function () {
  sidebar.classList.remove("sidebar--show");
  mask.classList.remove("white-mask--show");
  body.classList.remove("body--overflow");
});
mask.addEventListener("click", function () {
  sidebar.classList.remove("sidebar--show");
  mask.classList.remove("white-mask--show");
  body.classList.remove("body--overflow");
});

