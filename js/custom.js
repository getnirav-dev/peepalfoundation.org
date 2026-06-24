(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  //Navigation Section
  $('.navbar-collapse a:not(.dropdown-toggle)').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  /* Multi-level Dropdown Menu for Bootstrap */
  $(document).on('click', '.dropdown-submenu > a', function (e) {
    e.stopPropagation();
    e.preventDefault();

    // Close other dropdowns
    $('.dropdown-submenu').removeClass('open');
    $('.dropdown-submenu .dropdown-menu').hide();

    // Open this one
    $(this).parent().addClass('open');
    var $submenu = $(this).next('.dropdown-menu');
    $submenu.toggle();
  });


  // Close dropdowns when clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.dropdown-submenu').removeClass('open');
    }
  });

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    autoplay: true,
  })


  // PARALLAX EFFECT
  $.stellar();


  // SMOOTHSCROLL
  // SMOOTHSCROLL
  $(function () {
    $('.navbar-default a:not(.dropdown-toggle), #home a, footer a').on('click', function (event) {
      var $anchor = $(this);
      var href = $anchor.attr('href');
      // Only animate if it's a hash link pointing to a section, and not just '#'
      if (href && href.startsWith('#') && href !== '#') {
        $('html, body').stop().animate({
          scrollTop: $(href).offset().top - 49
        }, 1000);
        event.preventDefault();
      }
    });
  });



  // WOW ANIMATION
  new WOW({ mobile: false }).init();

})(jQuery);
