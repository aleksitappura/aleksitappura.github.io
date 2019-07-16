$(document).ready(function() {

	// Page transitions
  let options = {
    LINK_SELECTOR: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    FORM_SELECTOR: 'form[data-swup-form]',
    elements: [
      '#swup'
    ],
    animationSelector: '[class*="transition-"]',
    cache: true,
    pageClassPrefix: '',
    scroll: true,
    debugMode: true,
    preload: true,
    support: true,
    skipPopStateHandling: function (event) {
      if (event.state && event.state.source == "swup") {
        return false;
      }
      return true;
    },
    animateHistoryBrowsing: false,
  }
  const swup = new Swup(options);

	const swup = new Swup(options);

	// Open video modal
	$('.view-prototype').click(function(event) {
		$(this).modal({
			fadeDuration: 200
		});
		return false;
	});

	// Open and close mobile navigation
	$('.nav-toggle').click(function(event) {
		$('.nav').slideToggle(200);
		$('.navbar').toggleClass('open');
		$(this).toggleClass('open');
	});

	// Close navigation on mobile click
	$('.nav li a').click(function(event) {
		if (parseInt($(window).width()) < 550) {
			$('.nav').slideToggle(200);
			$('.navbar').toggleClass('open');
			$('.nav-toggle').toggleClass('open');
		}
	});
});