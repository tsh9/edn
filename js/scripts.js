$(document).ready(function(){
  $(window).on('scroll', function(e) {
    if($(this).scrollTop() > 1) {
      $('body').addClass('is-scrolled');
    }
    else {
      $('body').removeClass('is-scrolled');
    }
  })
});
