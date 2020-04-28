$(document).ready(function () {

  $('.carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    variableWidth: true,
  });

});

