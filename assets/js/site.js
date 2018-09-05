$(function () {
  /** Height of the navbar */
  var navHeight = $('#main-navbar').find('nav.navbar').outerHeight();

  /** Initialize scrollspy */
  $('body').scrollspy({ target: '#navitems', offset: navHeight })

  /**
   * Smooth scroll for nav item links
   */
  $('.scroll-smooth').on('click', function (event) {
    var target = this;
    var hash = target.hash; // must store as variable for lexical scope
    var scrollTime = 500;
    var scrollTop;

    // Only do smooth scrolling if we're not changing the path and are directed toward a hash
    if (hash && target.pathname === window.location.pathname) {
      // Cancel the normal click actions to prevent misalignment to the top
      event.preventDefault();

      // Hide any parent collapsables (default click behavior)
      $(target)
        .parents('.collapse')
        .collapse('hide');

      // Slowly scroll to the appropriate position
      scrollTop = $(hash).offset().top - navHeight;
      $('html, body')
        .animate({ scrollTop: scrollTop }, scrollTime)
        .promise()
        .then(function () {
          // Add hash to URL when done scrolling (default click behavior)
          history.pushState(null, null, hash);
        });
    }
  });
});
