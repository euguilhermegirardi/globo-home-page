var icon = document.querySelector('.navbar-mobile__menu--open');
var menu = document.querySelector('.navbar-mobile__menu');

icon.addEventListener('click', function dropDownMenu() {
  menu.style.width = '250px';
})

// function openNavMobile() {
//   document.getElementById("navbar-mobile__menu").style.width = "250px";
// }

function closeNavMobile() {
  document.getElementById("navbar-mobile__menu").style.width = "0";
}

function openSubNav() {
  document.getElementById("navbar-mobile__subSidebar").style.width = "250px";
}

function closeSubNav() {
  document.getElementById("navbar-mobile__subSidebar").style.width = "0";
}
