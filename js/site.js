var slide_current=0;
var slide_nums;
var slide_auto;
var slide_yt;
$(document).ready(function(){
    
    /*** scroll ***/
	$(window).scroll(windowScroll);
    windowScroll();

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
	slide_nums=$('section.slide .slide_area .item_box .item').length;
	slide_current=$('section.slide .slide_area .item_box .item.active').index();
	slide_auto=setInterval(bannerAuto,3000);
	$('section.slide .slide_area .dot_box .dot').on('click',bannerDot);

    // site
    $('section.site .inner .item_box').slick({
        arrows: false,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
        variableWidth: true,
        swipe: true,
        autoplay: true,
        responsive: [
		    {
			    breakpoint: 1300,
			    settings: {
                    arrows: false,
                    centerMode: true,
			    }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    centerMode: true,
			    }
		    }
		]
    });

    $('section.site .inner .item_box a').mouseenter(function(){
        if ($(window).width() >= 1200) {
            $(this).find('p').stop().slideDown(300);
        }
    });
    $('section.site .inner .item_box a').mouseleave(function(){
        if ($(window).width() >= 1200) {
            $(this).find('p').stop().slideUp(300);
        }
    });
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


// windowScroll
var winScroll;
var winHeight;


function windowScroll(){
	winScroll = $(window).scrollTop();
    winHeight = $(window).height();

    var ws = winScroll-($('section.editor').offset().top-210);
    var ws_end = $('section.editor .inner').innerHeight()-$('section.editor .inner .page_box').innerHeight()-$('.float').innerHeight();
    if(winScroll<$('section.editor').offset().top-210){
        $('.float').stop().animate({"top":0},0,"linear");
    }else if(winScroll>=$('section.editor').offset().top-210 && winScroll<$('section.editor .inner .page_box').offset().top-430){
        $('.float').stop().animate({"top":ws},0,"linear");
    }else if(winScroll>=$('section.editor .inner .page_box').offset().top-430){
        $('.float').stop().animate({"top":ws_end},0,"linear");
    }
    
}