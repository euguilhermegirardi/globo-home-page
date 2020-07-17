function cards() {
  tns({
    container: ".cards-slider",
     controls: false,
     slideBy: "page",
     items: 2,
     mouseDrag: true,
     swipeAngle: false,
     speed: 500,
     preventScrollOnTouch: "force",
     gutter: 20,
     edgePadding: 20,
     autoWidth: true,
  });
}

cards();
