function openDropdown(e) {
  var link = e.srcElement.parentElement
  link.classList.add('open')
}

function closeDropdown() {
  var element = document.getElementsByClassName('open')[0]
  element.classList.remove('open')
}

/* SHOW AND HIDE ITEM */
function showsOne(item) {
  $('.showAndHide').each(function (index) {
    if ($(this).attr("id") == item) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
}
/* SHOW AND HIDE ITEM ENDS */

/* SHOW AND HIDE ITEM */
function teams(item) {
  $('.showTeams').each(function (index) {
    if ($(this).attr("id") == item) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
}
/* SHOW AND HIDE ITEM ENDS */

/* Teams active button */
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/* Teams active button ends */


/* li active item */
var header = document.getElementById("myList");
var items = header.getElementsByClassName("li");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", function () {
    var current = document.getElementsByClassName("active-item");
    current[0].className = current[0].className.replace(" active-item", "");
    this.className += " active-item";
  });
}
// /* li active item ends */

// /* li active item */
var header2 = document.getElementById("myList2");
var items2 = header2.getElementsByClassName("li-2");
for (var i = 0; i < items2.length; i++) {
  items2[i].addEventListener("mouseover", function () {
    var current2 = document.getElementsByClassName("active-item2");
    current2[0].className = current2[0].className.replace(" active-item2", "");
    this.className += " active-item2";
  });
}
// /* li active item ends */

// /* li active item */
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

/* Slider */
$(document).ready(function () {
  $('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });
});


/* Slider ends */
