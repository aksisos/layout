const slider = document.querySelector(".swiper-container");
let swiper;

mobileSlider();

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 16,
      width: 240,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: false,
      },
    });
    slider.dataset.mobile = 'true';
  }

  if (
    window.innerWidth > 767 &&
    slider.classList.contains("swiper-container-initialized")
  ) {
    slider.dataset.mobile = 'false';
    swiper.destroy();
  }
}

const hiddenSlides = slider.querySelectorAll(".swiper-slide--hidden");

window.addEventListener("resize", () => {
  mobileSlider();
});

let showButton = document.querySelector(".button-show");
let showButtonIcon = document.querySelector(".slider-block__show-icon");
showButton.addEventListener("click", function () {
  slider.classList.toggle("swiper-container--show-all");
  showButtonIcon.classList.toggle("slider-block__show-icon--rotate");
  if (slider.classList.contains("swiper-container--show-all")) {
    showButton.textContent = "Скрыть";
  } else {
    showButton.textContent = "Показать все";
  }
});
