function openDropdown(e) {
  var link = e.srcElement.parentElement
  link.classList.add('open')
}

function closeDropdown() {
  var element = document.getElementsByClassName('open')[0]
  element.classList.remove('open')
}
