(function($) {
	$(document).ready(function() {
		activateMainNavigation();
		
		$('.inner-nav ul li:last-child').addClass('last');
		setNav();
	});
	
	function setNav() {
		var ul = $('.inner-nav ul');
		var left_space = Math.ceil(($('.inner-nav').width() - ul.width())/2);
		ul.css('margin-left', left_space);
	}
	
	function activateMainNavigation() {
		if ($('body').hasClass('open-your-own-school')) {
			$('#navigation ul li.purple a').addClass('active');
		} else if ($('body').hasClass('take-a-class')) {
			$('#navigation ul li.orange a').addClass('active');
		} else if ($('body').hasClass('real-estate-and-more')) {
			$('#navigation ul li.green a').addClass('active');
		}
	}
})(jQuery);