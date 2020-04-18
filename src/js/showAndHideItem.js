/* SHOW AND HIDE ITEM */
function showsOne(item) {
  $('.showAndHide').each(function (index) {
    if ($(this).attr("id") == item) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
}
/* SHOW AND HIDE ITEM ENDS */

/* SHOW AND HIDE ITEM */
function teams(item) {
  $('.navbar__teams-container').each(function (index) {
    if ($(this).attr("id") == item) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
}
/* SHOW AND HIDE ITEM ENDS */
