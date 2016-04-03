/**
 * Created by alexandr on 27.03.2016.
 */
var WINDOW = window.WINDOW || {};

$(document).ready(function() {
    $('html').dblclick(function() {
        alert('ouch');
    }); // end double click
    $('a').mouseover(function() {
    }); // end mouseover
}); // end ready


WINDOW.fancyBox = function(){
    if($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0){

        $(".fancybox").fancybox({
            padding : 0,
            beforeShow: function () {
                this.title = $(this.element).attr('title');
                this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
            },
            helpers : {
                title : { type: 'inside' },
            }
        });

        $('.fancybox-media').fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers : {
                media : {}
            }
        });
    }
}

WINDOW.listenerMenu = function(){
    $('#mobile-nav').on('click', function(e){
        $(this).toggleClass('open');

        if ($('#mobile-nav').hasClass('open')) {
            $('#navigation-mobile').slideDown(500, 'easeOutExpo');
        } else {
            $('#navigation-mobile').slideUp(500, 'easeOutExpo');
        }
        e.preventDefault();
    });

    $('#menu-nav-mobile a').on('click', function(){
        $('#mobile-nav').removeClass('open');
        $('#navigation-mobile').slideUp(350, 'easeOutExpo');
    });
}