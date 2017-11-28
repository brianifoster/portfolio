$(document).ready(function() {

  // scroll spy code
  $('body').attr('data-spy', 'scroll').scrollspy({target: '.navbar'});

  // smooth scroll code
  $('.smooth-scroll').on('click', function() {
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
  });

});
