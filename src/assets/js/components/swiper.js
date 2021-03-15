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

const swiperReviews = new Swiper(
  ".swiper-container.reviews__swiper-container",
  {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination.swiper-pagination--reviews",
      clickable: true,
    },
  }
);
