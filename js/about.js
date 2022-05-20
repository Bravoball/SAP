var slide_current01=0;
var slide_nums01;
var slide_auto01;

var slide_current02=0;
var slide_nums02;
var slide_auto02;
$(document).ready(function(){

    // slide
	slide_nums01=$('.slide_box01 .slide_area .item_box .item').length;
	slide_current01=$('.slide_box01 .slide_area .item_box .item.active').index();
	slide_auto01=setInterval(bannerAuto,3000);
	$('.slide_box01 .slide_area .dot_box .dot').on('click',bannerDot);
    
	slide_nums02=$('.slide_box02 .slide_area .item_box .item').length;
	slide_current02=$('.slide_box02 .slide_area .item_box .item.active').index();
	slide_auto02=setInterval(bannerAuto2,3000);
	$('.slide_box02 .slide_area .dot_box .dot').on('click',bannerDot2);

    // more
    $('.more').on('click',function(){
        $(this).parent().find('.m').animate({"height":"100%"},500);
        $(this).hide();
    });
})

var is_banner=false;
function bannerDot(){
    if($(this).hasClass('active')!=true){
        if(!is_banner){
            is_banner=true;
            clearInterval(slide_auto01);
            slide_current01=$(this).index();
            bannerAct();
        }
    }
}
function bannerAuto(){
	if(!is_banner){
		is_banner=true;
		clearInterval(slide_auto01);
		slide_current01++;
		if(slide_current01>=slide_nums01){
			slide_current01=0;
		}
		bannerAct();
	}
}
function bannerAct(){
	$('.slide_box01 .slide_area .item_box .item.active').fadeOut(500,function(){
		$('.slide_box01 .slide_area .item_box .item.active').removeClass('active');
        $('.slide_box01 .slide_area .item_box .item:eq('+slide_current01+')').fadeIn(500,function(){
            $('.slide_box01 .slide_area .item_box .item:eq('+slide_current01+')').addClass('active');
            is_banner=false;
            slide_auto01=setInterval(bannerAuto,3000);
        });
	});

	
	$('.slide_box01 .slide_area .dot_box .dot.active').removeClass('active');
	$('.slide_box01 .slide_area .dot_box .dot:eq('+slide_current01+')').addClass('active');
}



var is_banner2=false;
function bannerDot2(){
    if($(this).hasClass('active')!=true){
        if(!is_banner2){
            is_banner2=true;
            clearInterval(slide_auto02);
            slide_current02=$(this).index();
            bannerAct2();
        }
    }
}
function bannerAuto2(){
	if(!is_banner2){
		is_banner2=true;
		clearInterval(slide_auto02);
		slide_current02++;
		if(slide_current02>=slide_nums02){
			slide_current02=0;
		}
		bannerAct2();
	}
}
function bannerAct2(){
	$('.slide_box02 .slide_area .item_box .item.active').fadeOut(500,function(){
		$('.slide_box02 .slide_area .item_box .item.active').removeClass('active');
        $('.slide_box02 .slide_area .item_box .item:eq('+slide_current02+')').fadeIn(500,function(){
            $('.slide_box02 .slide_area .item_box .item:eq('+slide_current02+')').addClass('active');
            is_banner2=false;
            slide_auto02=setInterval(bannerAuto2,3000);
        });
	});

	
	$('.slide_box02 .slide_area .dot_box .dot.active').removeClass('active');
	$('.slide_box02 .slide_area .dot_box .dot:eq('+slide_current02+')').addClass('active');
}


