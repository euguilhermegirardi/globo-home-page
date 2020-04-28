var header = document.getElementById("navbar__btn-container");
var btns = header.getElementsByClassName("navbar__btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(" active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
