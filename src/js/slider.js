$(document).ready(function () {

  var slider = $(".carousel");
  slider.each(function () {

    if ($(this).is(".post-wrapper")) {
      $(this).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        variableWidth: true,
      });
    }
    else if ($(this).is(".top-globo-slider__post-wrapper")) {
      $(this).slick({
        dots: true,
        arrows: false,
      });
    }
    else if ($(this).is(".cards-slider__post-wrapper")) {
      $(this).slick({
        infinite: true,
        dots: false,
        arrows: false,
        variableWidth: true,
      });
    }
    else {
      $(this).slick();
    }

  });
});

$(window).resize(function () {
  var viewportWidth2 = $(window).width();
  if (viewportWidth2 <= 375) {
    $(".prev, .next").remove();
  }
});
