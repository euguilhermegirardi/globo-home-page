const btn = document.querySelectorAll('.navbar__btn');
const gridContainer = document.querySelectorAll('.navbar__teams-container');

btn.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    // hide first to show on click
    gridContainer.forEach(element => {
      element.style.display = 'none';
    });

    let container = document.getElementById(element.dataset.targetId);
    container.style.display = 'block';
  });
})

