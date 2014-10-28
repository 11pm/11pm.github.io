$('nav > a').on('click', function(){
	var target = $(this.hash);
	var offset = target.offset().top;
	//seconds to travel
	var animation = 800;
	if(target){

		$('body').animate({
			scrollTop: target.offset().top
		}, animation);

	}
	
	//Stop browser from using default click
	return false;
});