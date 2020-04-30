const menuItems = document.querySelectorAll('.navbar__li');
const dropdowns = document.querySelectorAll('.navbar__dropdown');

// Define our viewportWidth variable
var viewportWidth;
// Set/update the viewportWidth value
var setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}
// Log the viewport width into the console
var logWidth = function () {
	if (viewportWidth >= 800) {
    // open dropdown
    menuItems.forEach(element => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        // before set the new class, "clear" all others
        dropdowns.forEach(dropdown => {
          dropdown.style.display = 'none';
        });
        let dropdownItem = document.getElementById(element.dataset.targetId)
        dropdownItem.style.display = 'flex';
      });
    });

    // close dropdown
    dropdowns.forEach(element => {
      element.addEventListener('mouseleave', () => {
        dropdowns.forEach(dropdown => {
          dropdown.style.display = 'none';
        })
      });
    });
	}
}
// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener('resize', function (e) {
  e.preventDefault();
	setViewportWidth();
	logWidth();
}, false);
