$(document).ready(function(){

  $("#LinktoProjects").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".project1").offset().top
    }, 1000);
  });

  $('.images').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1
  });

  // Hack to get videos to autoplay
  document.getElementById('Video').play();

  $('.project1').waypoint(function (direction) {
    if (direction=='down') {
      $('.project1').addClass('visible');
      $('.project1 .description').addClass('visible');
    } else {
      $('.project1').removeClass('visible');
    }
  }, { offset: '50%' });

  $('.project2').waypoint(function (direction) {
    if (direction=='down') {
      $('.project2').addClass('visible');
      $('.project2 .description').addClass('visible');
    } else {
      $('.project2').removeClass('visible');
    }
  }, { offset: '50%' });

  var userFeed = new Instafeed({
    get: 'user',
    userId: '53821245',
    accessToken: '3406981.c95c6fc.1a720e82550847cab265846cf951cd1b',
    limit: 6,
    resolution: 'standard_resolution'
  });
  userFeed.run();

})
