$(document).ready(function() {

	// Page transitions
	const swup = new Swup({
	  plugins: [
	  	new SwupScrollPlugin(),
	  	new SwupBodyClassPlugin()
	  ]
	});

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

	// Form submission
	$('#contact-form').submit(function(e) {
		e.preventDefault();

		var $form = $(this);
		$.post($form.attr('action'), $form.serialize()).then(function() {
			alert('Thank you!');
		});
	});
});