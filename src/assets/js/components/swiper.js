const swiper = new Swiper(".swiper-container.brands__swiper-container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperExamples = new Swiper(
  ".swiper-container.examples__swiper-container",
  {
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination.swiper-pagination--examples",
      clickable: true,
    },
  }
);
