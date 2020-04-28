var icon = document.querySelector('.navbar-mobile__menu--open');
var menu = document.querySelector('.navbar-mobile__menu');
var close = document.querySelector('.navbar-mobile__menu--close');
var link = document.querySelector('.navbar-mobile__links--subMenu');
var subMenu = document.querySelector('.navbar-mobile__subSidebar');
var closeSubMenu = document.querySelector('.navbar-mobile__subSidebar--close');

if(icon) {
  icon.addEventListener('click', () => {
    menu.style.width = '250px';
  });
}

if(close) {
  close.addEventListener('click', () => {
    menu.style.width = '0'
  });
}

if(link) {
  link.addEventListener('click', () => {
    subMenu.style.width = "250px";
  });
}

if(closeSubMenu) {
  closeSubMenu.addEventListener('click', () => {
    subMenu.style.width = "0";
  });
}



