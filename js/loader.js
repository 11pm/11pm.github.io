var container = $('.container');
var scroller = $('.scroller');
var social = $('.social-grid');

container.hide();
scroller.hide();
social.hide()

$(document).ready(function(){
	container.delay(100).fadeIn(1000);
	social.delay(200).fadeIn(1000);

	$('.container .name').delay(1000).fadeIn(100).css('color', 'white');
});
