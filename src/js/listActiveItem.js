/* li active item */
var header = document.getElementById("navbar__g1-list");
var items = header.getElementsByClassName("navbar__g1-li");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", function () {
    var current = document.getElementsByClassName("active-item");
    current[0].className = current[0].className.replace(" active-item", "");
    this.className += " active-item";
  });
}
/* li active item ends */

/* li active item */
var header2 = document.getElementById("navbar__ge-list");
var items2 = header2.getElementsByClassName("navbar__ge-li");
for (var i = 0; i < items2.length; i++) {
  items2[i].addEventListener("mouseover", function () {
    var current2 = document.getElementsByClassName("active-item2");
    current2[0].className = current2[0].className.replace(" active-item2", "");
    this.className += " active-item2";
  });
}
/* li active item ends */

/* li active item */
var header3 = document.getElementById("myList3");
var items3 = header3.getElementsByClassName("li-3");
for (var i = 0; i < items3.length; i++) {
  items3[i].addEventListener("mouseover", function () {
    var current3 = document.getElementsByClassName("active-item3");
    current3[0].className = current3[0].className.replace(" active-item3", "");
    this.className += " active-item3";
  });
}
/* li active item ends */
