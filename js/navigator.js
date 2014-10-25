$('nav > a').on('click', function(){
	var target = $(this.hash);
	var offset = target.offset().top;
	console.log(target)
	//seconds to travel
	var animation = 800;
	if(offset < animation) animation = offset;
	console.log(animation)
	if(target){

		$('body').animate({
			scrollTop: target.offset().top
		}, animation);

	}
	
	//Stop browser from using default click
	return false;
})