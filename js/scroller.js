var scroller = false;

var updateView = function(){
	
	
	var scrollLocation = $(window).scrollTop();

	$('section').each(function(){
	
		var section = $(this);
		console.log(section)
		var offset = section[0].offsetTop;
		console.log(offset + ', ' + scrollLocation)


		if(offset >= scrollLocation){
			section.fadeIn(500);
		}

		//show scroller
		if(scrollLocation > 150 && scroller == false){
			scroller = true;
			console.log('TIME FOR SCROLLER')
			$('.scroller').fadeIn(800);
		}
	});

}

$(window).scroll(updateView);
(function(){
	updateView();
})();