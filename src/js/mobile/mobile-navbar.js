var icon = document.querySelector('.navbar-mobile__menu--open');
var menu = document.querySelector('.navbar-mobile__menu');
var close = document.querySelector('.navbar-mobile__menu--close');
var link = document.querySelector('.navbar-mobile__links--subMenu');
var subMenu = document.querySelector('.navbar-mobile__subSidebar');
var closeSubMenu = document.querySelector('.navbar-mobile__subSidebar--close');

if(icon) {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.width = '25rem';
  });
}

if(close) {
  close.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.width = '0'
  });
}

if(link) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    subMenu.style.width = "25rem";
  });
}

if(closeSubMenu) {
  closeSubMenu.addEventListener('click', (e) => {
    e.preventDefault();
    subMenu.style.width = "0";
  });
}



