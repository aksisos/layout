import "../scss/style.scss";
import "./sidebar/sidebar.js";
import "./slider/slider.js";
import "./modal/modal.js";

const tabletText = document.querySelector(".main__text-tablet");
const desktopText = document.querySelector(".main__text-desktop");
const allText = document.querySelector(".main__text-all");
const showButton = document.querySelector(".main__show-all");
const showButtonIcon = document.querySelector(".main__show-icon");
let showButtonToggle = false;

window.addEventListener("resize", () => {
  if (window.innerWidth < 767 && showButtonToggle === false) {
    tabletText.classList.add("main__text--hide");
    desktopText.classList.add("main__text--hide");
  }
  if (window.innerWidth > 767 && showButtonToggle === false) {
    tabletText.classList.remove("main__text--hide");
    desktopText.classList.add("main__text--hide");
  }
  if (window.innerWidth > 1366 && showButtonToggle === false) {
    tabletText.classList.remove("main__text--hide");
    desktopText.classList.remove("main__text--hide");
  }
});

showButton.addEventListener("click", function () {
  if (showButtonToggle === false) {
    showButtonToggle = true;
    tabletText.classList.remove("main__text--hide");
    desktopText.classList.remove("main__text--hide");
    allText.classList.remove("main__text--hide");
    showButtonIcon.style.transform = "rotate(-180deg)";
    showButton.textContent = "Скрыть";
  } else {
    showButtonToggle = false;
    tabletText.classList.add("main__text--hide");
    desktopText.classList.add("main__text--hide");
    allText.classList.add("main__text--hide");
    showButtonIcon.style.transform = "rotate(0)";
    showButton.textContent = "Читать далее";
  }
  if (window.innerWidth < 767 && showButtonToggle === false) {
    tabletText.classList.add("main__text--hide");
    desktopText.classList.add("main__text--hide");
  }
  if (window.innerWidth > 767 && showButtonToggle === false) {
    tabletText.classList.remove("main__text--hide");
    desktopText.classList.add("main__text--hide");
  }
  if (window.innerWidth > 1366 && showButtonToggle === false) {
    tabletText.classList.remove("main__text--hide");
    desktopText.classList.remove("main__text--hide");
  }
});
