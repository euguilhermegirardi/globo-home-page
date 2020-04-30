const listItem = document.querySelectorAll('.navbar__first-column-li');
const secondColumn = document.querySelectorAll('.navbar__second-column');

listItem.forEach(element => {
  element.addEventListener('mouseover', (e) => {
    e.preventDefault();

    // before set the new class, "clear" all others
    secondColumn.forEach(div => {
      div.style.display = 'none';
    });

    let div = document.getElementById(element.dataset.targetId)
    div.style.display = 'block';
  });
});
