$(function () {
  $(".brands-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prev--brands"),
    nextArrow: $(".next-brands"),
  });

  $(".examples-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".prev--examples"),
    nextArrow: $(".next--examples"),
  });

  $(".reviews-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".prev--reviews"),
    nextArrow: $(".next--reviews"),
    dots: true,
  });
});
