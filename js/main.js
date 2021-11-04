$(function () {
    "use strict";

    // setting height for slide show
    var windowHeight = $(window).height();
    var upperHeight = $('.uppar-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(windowHeight - ( upperHeight + navHeight ));


    // featured work shuffle
    $('.feature-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md').css('opacity', 1);
        } else {
            $('.shuffle-images .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });

});
