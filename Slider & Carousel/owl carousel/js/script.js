$('.owl-carousel').owlCarousel({
    items:5,
    pagination:false,
    margin:1,
    dots : false,
    nav: true,
    // Animation
    animateOut: 'fadeOut'
});

(function($){
	jQuery(window).load(function(){

		/*home post masonry starts*/
		//var gutter = parseInt(jQuery('.post').css('marginBottom'));
		var container = jQuery('.bravo-wpr');

		// Creates an instance of Masonry on #posts

		container.masonry({
			gutter: 0,
			itemSelector: '.item',
			columnWidth: '.item'
		});

		/*home post masonry ends*/



	});
})(jQuery);