
$(document).ready(function(){

    $('section.list .inner .item_box a').mouseenter(function(){
        if ($(window).width() >= 1200) {
            $(this).find('p').stop().slideDown(300);
        }
    });
    $('section.list .inner .item_box a').mouseleave(function(){
        if ($(window).width() >= 1200) {
            $(this).find('p').stop().slideUp(300);
        }
    });

})
