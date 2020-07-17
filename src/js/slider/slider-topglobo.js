function topglobo() {
  tns({
    container: ".topglobo-slider",
    controls: false,
    items: 1,
    speed: 300,
    autoplay: false,
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    swipeAngle: false,
    mouseDrag: true,
    nav: false,
    fixedWidth: 750,
    gutter: 20,
    preventScrollOnTouch: "force",
    slideBy: 'page',
    responsive: {
      480: {
        fixedWidth: 450,
      },

      300: {
        fixedWidth: 290,
      }
    }
  });
}

topglobo();
