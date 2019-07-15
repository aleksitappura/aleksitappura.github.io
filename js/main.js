$(document).ready(function() {

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

	// Add active class to clicked link
	$('.nav li a').click(function(event) {
		$('.nav li a').removeClass('active');
		$(this).addClass('active');
	}
});