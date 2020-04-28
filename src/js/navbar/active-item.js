let items = document.querySelectorAll('.navbar__first-column-li');

items.forEach((item) => {
  item.addEventListener('mouseover', () =>{
    items.forEach((item) => {
      item.classList.remove('active-item');
    });

    item.classList.add('active-item');
  });
});
