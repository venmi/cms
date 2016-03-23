window.onload = function() {
	var mySwiper = new Swiper('#bannerSwiper', {
		loop: true,
		autoplay:5000,
		pagination: '#bannerpagination',
		paginationClickable: true,
		grabCursor : true,
		autoplayDisableOnInteraction:false,
	});

	$('.arrow-left').on('click', function(e){
	    e.preventDefault();
	    mySwiper.swipePrev();
	});
    $('.arrow-right').on('click', function(e){
	    e.preventDefault();
	    mySwiper.swipeNext();
    });
}