var slide_current=0;
var slide_nums;
var slide_auto;
$(document).ready(function(){
    // slide
    $('.yt_img').on('click',function(){
        if($(this).hasClass('active')==true){
            slide_yt=$('.yt_yt').attr('yt');
            $('.yt_yt iframe').prop('src',slide_yt);
            clearInterval(slide_auto);
            $(this).fadeOut(500,function(){
                $(this).removeClass('active');
                $('.yt_yt').addClass('active');
            })
        }
    });
    
    let _title = $('section.slide .slide_area .item_box .item:eq(0)').data("title");
    $(".slide_title").html(_title);
    slide_nums = $('section.slide .slide_area .item_box .item').length;
    if (slide_nums > 1) {
        slide_current = $('section.slide .slide_area .item_box .item.active').index();
        slide_auto = setInterval(bannerAuto, 3000);
        $('section.slide .slide_area .dot_box .dot').on('click', bannerDot);
    }
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
			let _title=$(this).data("title");
			$(".slide_title").html(_title);
            $('section.slide .slide_area .item_box .item:eq('+slide_current+')').addClass('active');
            is_banner=false;
            slide_auto=setInterval(bannerAuto,3000);
        });
	});
	
	
	$('section.slide .slide_area .dot_box .dot.active').removeClass('active');
	$('section.slide .slide_area .dot_box .dot:eq('+slide_current+')').addClass('active');
}
