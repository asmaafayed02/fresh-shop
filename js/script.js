/*global $, alert, console*/
$(function(){
    'use strict';
    //adjust header height
    var myHeader = $('header'),
        mySlider = $('.slider');
    myHeader.height($(window).height());
    $(window).resize(function(){
        myHeader.height($(window).height()); 
    //make the slider item center
        mySlider.each(function(){
            $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2)
        });  
    });
    //links add class active
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    //make the slider item center
    mySlider.each(function(){
        $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2)
    });
    //trigger the bx slider
    mySlider.bxSlider();
    //make smoothe scroll
    $('.links li a').click(function(){
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    });
    //trigger the suffle
    $('#container').mixItUp();
    //adjust suffle links
    $('.suffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    //start code imgslider
    (function autoSlider(){
        $('.imgslider .active ').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000,function(){
                      $(this).removeClass('active').next().addClass('active').fadeIn();
                      autoSlider();
                });
            }
                  else{
                    $(this).delay(3000).fadeOut(1000,function(){
                        $(this).removeClass('active');
                        $('.imgslider div').eq(0).addClass('active').fadeIn();
                        autoSlider();
                    })
                }
            
        });

    }());

});

