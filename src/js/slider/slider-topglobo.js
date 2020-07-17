function topglobo() {
  tns({
     controls: false,
     container: ".topglobo-slider",
     slideBy: "page",
     items: 1,
     mouseDrag: true,
     swipeAngle: false,
     speed: 600,
     preventScrollOnTouch: "force",
     gutter: 58,
     autoWidth: true,
  });
}

topglobo();
