const slider = document.querySelector(".swiper-container");
let pricesSwiper;
let brandSwiper;
let techSwiper;

mobileSliders();

function mobileSliders() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == "false") {
    pricesSwiper = new Swiper(".prices__container", {
      pagination: {
        el: ".prices__pagination",
      },
      direction: "horizontal",
      spaceBetween: 16,
      width: 260,
      loop: true,
    });

    brandSwiper = new Swiper(".brands__container", {
      pagination: {
        el: ".brands__pagination",
      },
      direction: "horizontal",
      spaceBetween: 16,
      width: 224,
    });

    techSwiper = new Swiper(".tech__container", {
      pagination: {
        el: ".tech__pagination",
      },
      direction: "horizontal",
      spaceBetween: 16,
      width: 240,
      loop: true,
    });
    slider.dataset.mobile = "true";
  }

  if (
    window.innerWidth > 767 &&
    slider.classList.contains("swiper-container-initialized")
  ) {
    slider.dataset.mobile = "false";
    brandSwiper.destroy();
    pricesSwiper.destroy();
    techSwiper.destroy();
  }
}

window.addEventListener("resize", () => {
  mobileSliders();
});

const brandsShow = document.querySelector(".brands__show-all");
const brandsContainer = document.querySelector(".brands__wrapper");
const brandsShowIcon = document.querySelector(".brands__show-icon");

brandsShow.addEventListener("click", function () {
  brandsContainer.classList.toggle("brands__wrapper--show-all");
  if (brandsContainer.classList.contains("brands__wrapper--show-all")) {
    brandsShow.textContent = "Скрыть";
    brandsShowIcon.style = "transform: rotate(-180deg)";
  } else {
    brandsShow.textContent = "Показать все";
    brandsShowIcon.style = "transform: rotate(0deg)";
  }
});

const techShowIcon = document.querySelector(".tech__show-icon");
const techContainer = document.querySelector(".tech__wrapper");
const techShow = document.querySelector(".tech__show-all");

techShow.addEventListener("click", function () {
  techContainer.classList.toggle("tech__wrapper--show-all");
  if (techContainer.classList.contains("tech__wrapper--show-all")) {
    techShow.textContent = "Скрыть";
    techShowIcon.style = "transform: rotate(-180deg)";
  } else {
    techShow.textContent = "Показать все";
    techShowIcon.style = "transform: rotate(0deg)";
  }
});
