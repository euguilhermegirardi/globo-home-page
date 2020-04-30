let items = document.querySelectorAll('.navbar__first-column-li');

const handleMouseOver = (e) => {
  e.preventDefault();

  items.forEach((item) => {
    item.classList.remove('active-item');
  });

  e.currentTarget.classList.add('active-item');
}

items.forEach(element => {
  element.addEventListener('mouseover', handleMouseOver)
});
