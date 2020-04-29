let btns = document.querySelectorAll('.navbar__btn');

const handleClick = (e) => {
  e.preventDefault();

  btns.forEach(element => {
    element.classList.remove('btn-active');
  });
  e.currentTarget.classList.add('btn-active');
};

btns.forEach(element => {
  element.addEventListener('click', handleClick)
});
