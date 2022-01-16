const sidebar = document.querySelector(".sidebar");
const burgerButton = document.querySelector(".header__burger-button");
const closeButton = sidebar.querySelector(".sidebar__close");
const mask = document.querySelector(".white-mask");

burgerButton.addEventListener("click", function () {
  sidebar.classList.add("sidebar--show");
  mask.classList.add("white-mask--show");
});
closeButton.addEventListener("click", function () {
  sidebar.classList.remove("sidebar--show");
  mask.classList.remove("white-mask--show");
});
mask.addEventListener("click", function () {
  sidebar.classList.remove("sidebar--show");
  mask.classList.remove("white-mask--show");
});
