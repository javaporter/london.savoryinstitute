$(function() {

  // parallax
  if (!Modernizr.touch) {
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 0,
      horizontalOffset: 0
    });
  }


  // smooth scrolling on links
  var $root = $('html, body');
  $('a').click(function () {
    $root.delay(300).animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });


  // off canvas nav
  $('nav#nav').mmenu();


  // back to top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-to-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  });


  // tabs http://refills.bourbon.io
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });


});