var slide_current=0;
var slide_nums;
var slide_auto;
$(document).ready(function(){
    // slide
	slide_nums=$('section.slide .slide_area .item_box .item').length;
	slide_current=$('section.slide .slide_area .item_box .item.active').index();
	slide_auto=setInterval(bannerAuto,3000);
	$('section.slide .slide_area .dot_box .dot').on('click',bannerDot);

})

var is_banner=false;
function bannerDot(){
    if($(this).hasClass('active')!=true){
        if(!is_banner){
            is_banner=true;
            clearInterval(slide_auto);
            slide_current=$(this).index();
            bannerAct();
        }
    }
}
function bannerAuto(){
	if(!is_banner){
		is_banner=true;
		clearInterval(slide_auto);
		slide_current++;
		if(slide_current>=slide_nums){
			slide_current=0;
		}
		bannerAct();
	}
}
function bannerAct(){
	$('section.slide .slide_area .item_box .item.active').fadeOut(500,function(){
		$('section.slide .slide_area .item_box .item.active').removeClass('active');
        $('section.slide .slide_area .item_box .item:eq('+slide_current+')').fadeIn(500,function(){
            $('section.slide .slide_area .item_box .item:eq('+slide_current+')').addClass('active');
            is_banner=false;
            slide_auto=setInterval(bannerAuto,3000);
        });
	});
	
	
	$('section.slide .slide_area .dot_box .dot.active').removeClass('active');
	$('section.slide .slide_area .dot_box .dot:eq('+slide_current+')').addClass('active');
}