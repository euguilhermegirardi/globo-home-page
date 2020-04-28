$(document).ready(function () {

  $('.cards-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    variableWidth: true,
  });

});
