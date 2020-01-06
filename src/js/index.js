function openDropdown(e) {
  var link = e.srcElement.parentElement
  link.classList.add('open')
}

function closeDropdown() {
  var element = document.getElementsByClassName('open')[0]
  element.classList.remove('open')
}

/* MULTI LEVEL DROPDOWNS */
function showsOne(item) {
  $('.gshow-links').each(function (index) {
    if ($(this).attr("id") == item) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
}
/* MULTI LEVEL DROPDOWNS ENDS */
