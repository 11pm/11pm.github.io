var scrollerEnabled = false;
var scroller = $('.scroller');

var updateView = function(){
	
	
	var scrollLocation = $(window).scrollTop();

	$('section').each(function(){
	
		var section = $(this);
		var offset = section.offset().top;

		if(offset >= scrollLocation){
			section.fadeIn(500);
		}

		//show scroller
		if(scrollLocation > 150 && scrollerEnabled == false){
			scrollerEnabled = true;
			scroller.fadeIn(800);
		}
	});

}

$(window).scroll(updateView);
(function(){
	updateView();
})();

scroller.on('click', function(){

	$('body').animate({
		scrollTop: 0
	});

});