const menuItems = document.querySelectorAll('.navbar__li');
const dropdowns = document.querySelectorAll('.navbar__dropdown');

function opened() {
  menuItems.forEach(element => {

    element.addEventListener('click', () => {
      // before set the new class, "clear" all others
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      });

      let item = document.getElementById(element.dataset.targetId)
      item.style.display = 'flex';
    });
  })
}
opened();

function mouseOut() {
  dropdowns.forEach(element => {
    element.addEventListener('mouseleave', () => {
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      })
    });
  })
}
mouseOut();
