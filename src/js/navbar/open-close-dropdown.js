const menuItems = document.querySelectorAll('.navbar__li');
const dropdowns = document.querySelectorAll('.navbar__dropdown');


 function openClose() {
  menuItems.forEach(element => {
    element.addEventListener('click', () => {
      // before set the new class, "clear" all others
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      });
      let dropdownItem = document.getElementById(element.dataset.targetId)
      dropdownItem.style.display = 'flex';
    });
  });

  dropdowns.forEach(element => {
    element.addEventListener('mouseleave', () => {
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      })
    });
  });
}
openClose();



// Define our viewportWidth variable
var viewportWidth;
// Set/update the viewportWidth value
var setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}
// Log the viewport width into the console
var logWidth = function () {
	if (viewportWidth > 800) {
    console.log('Wide view');
	}
}
// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener('resize', function () {
	setViewportWidth();
	logWidth();
}, false);
