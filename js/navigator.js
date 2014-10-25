$('nav > a').on('click', function(){
	var target = $(this.hash);

	if(target){

		$('body').animate({
			scrollTop: target.offset().top
		}, 800);

	}
	
	//Stop browser from using default click
	return false;
})