$(document).ready(function () {
  $(this).click(function (e) {
    if ($(e.target).is('a[href="#contact"]')) {
      $('body').addClass('highlight-contact');
    } else {
      $('body').removeClass('highlight-contact');
    }
  });
});
