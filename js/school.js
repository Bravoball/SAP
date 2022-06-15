// var slide_current=0;
// var slide_nums;
// var slide_auto;
$(document).ready(function(){

    // slide
	// slide_nums=$('section.slide .slide_area .item_box .item').length;
	// slide_current=$('section.slide .slide_area .item_box .item.active').index();
	// slide_auto=setInterval(bannerAuto,3000);
	// $('section.slide .slide_area .dot_box .dot').on('click',bannerDot);

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

// var is_banner=false;
// function bannerDot(){
//     if($(this).hasClass('active')!=true){
//         $('.yt_yt iframe').prop('src','');
//         $('.yt_yt').removeClass('active');
//         $('.yt_img').addClass('active').show();
//         if(!is_banner){
//             is_banner=true;
//             clearInterval(slide_auto);
//             slide_current=$(this).index();
//             bannerAct();
//         }
//     }
// }
// function bannerAuto(){
// 	if(!is_banner){
// 		is_banner=true;
// 		clearInterval(slide_auto);
// 		slide_current++;
// 		if(slide_current>=slide_nums){
// 			slide_current=0;
// 		}
// 		bannerAct();
// 	}
// }
// function bannerAct(){
// 	$('section.slide .slide_area .item_box .item.active').fadeOut(500,function(){
// 		$('section.slide .slide_area .item_box .item.active').removeClass('active');
//         $('section.slide .slide_area .item_box .item:eq('+slide_current+')').fadeIn(500,function(){
//             $('section.slide .slide_area .item_box .item:eq('+slide_current+')').addClass('active');
//             is_banner=false;
//             slide_auto=setInterval(bannerAuto,3000);
//         });
// 	});
	
	
// 	$('section.slide .slide_area .dot_box .dot.active').removeClass('active');
// 	$('section.slide .slide_area .dot_box .dot:eq('+slide_current+')').addClass('active');
// }
