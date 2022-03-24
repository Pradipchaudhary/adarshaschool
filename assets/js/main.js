// JavaScript
// Text Limit for Title
$(document).ready(function () {
  $(".limit-200").each(function (i) {
    var len = $(this).text().trim().length;
    if (len > 500) {
      $(this).text($(this).text().substr(0, 500) + "...");
    }
  });
});
