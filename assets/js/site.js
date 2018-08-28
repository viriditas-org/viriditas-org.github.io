$(function () {
  /** Height of the navbar */
  var navHeight = $('#main-navbar').find('nav.navbar').outerHeight();

  /** Initialize scrollspy */
  $('body').scrollspy({ target: '#navitems', offset: navHeight })


  /**
   * Smooth scroll for nav item links
   */
  $('.scroll-smooth').on('click', function (event) {
    var hash = this.hash; // must store as variable for lexical scope
    var scrollTime = 500;
    var scrollTop;

    // Only do smooth scrolling if we're not changing the path and are directed toward a hash
    if (hash && this.pathname === window.location.pathname) {
      event.preventDefault();
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
