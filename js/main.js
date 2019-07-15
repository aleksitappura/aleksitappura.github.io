$(document).ready(function() {

	$('.view-prototype').click(function(event) {
		$(this).modal({
		fadeDuration: 200
	});
		return false;
	});

	$('.nav-toggle').click(function(event) {
		$('.nav').slideToggle(200);
		$('.navbar').toggleClass('open');
		$(this).toggleClass('open');
	});
});