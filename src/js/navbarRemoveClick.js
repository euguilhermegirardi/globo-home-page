$(window).resize(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth <= 700) {
    $(".navbar__link").prop("onclick", null).off("click");
  }
});
