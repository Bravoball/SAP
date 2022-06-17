var site_index;
$(document).ready(function(){
    // kv
    $('section.kv .gif_box').slick({
        arrows: false,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
        // variableWidth: true,
        swipe: true,
        autoplay: true,
        centerMode: true,
    });

    // site
    $('section.site .inner .item_box [class^="item"]').slick({
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
                    // centerMode: true,
			    }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: true,
                    centerMode: true,
			    }
		    }
		]
    });

    $('section.site .inner .main .item_box [class^="item"] a').mouseenter(function(){
        if ($(window).width() >= 1200) {
            $(this).find('p').stop().slideDown(300);
        }
    });
    $('section.site .inner .main .item_box [class^="item"] a').mouseleave(function(){
        if ($(window).width() >= 1200) {
            $(this).find('p').stop().slideUp(300);
        }
    });

    $('section.site .inner .main .tag span').on('click',function(){
        if($(this).hasClass('active')!=true){
            site_index = $(this).index()+1;
            $('section.site .inner .main .tag span.active').removeClass('active');
            $('section.site .inner .main .item_box [class^="item"].active').fadeOut(300,function(){
                $('section.site .inner .main .item_box [class^="item"].active').removeClass('active');
                $('section.site .inner .main .item_box .item'+site_index).fadeIn(300,function(){
                    $('section.site .inner .main .item_box .item'+site_index).addClass('active');
                })
                
            })
            $(this).addClass('active');
        }
    });

    // lecture
    $('section.lecture .inner .list').slick({
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
                breakpoint: 750,
                settings: {
                    arrows: false,
                    centerMode: true,
			    }
		    }
		]
    });
    
    // course
    $('section.course .inner .main .list a').mouseenter(function(){
        if ($(window).width() >= 750) {
            $(this).find('p').stop().slideDown(300);
        }
    });
    $('section.course .inner .main .list a').mouseleave(function(){
        if ($(window).width() >= 750) {
            $(this).find('p').stop().slideUp(300);
        }
    });
})
