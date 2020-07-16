function slider() {
  tns({
     controls: true,
     container: ".slider",
     slideBy: "page",
     items: 6,
     mouseDrag: true,
     swipeAngle: false,
     speed: 400,
     preventScrollOnTouch: "force",
     gutter: 30,
     autoWidth: true,
     responsive: {
      200: {
         controlsText: ['<', '>'],
      }
   }
  });
}

slider();
