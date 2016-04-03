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


WINDOW.contactForm = function(){
    $("#contact-submit").on('click',function() {
        $contact_form = $('#contact-form');

        var fields = $contact_form.serialize();

        $.ajax({
            type: "POST",
            url: "_include/php/contact.php",
            data: fields,
            dataType: 'json',
            success: function(response) {

                if(response.status){
                    $('#contact-form input').val('');
                    $('#contact-form textarea').val('');
                }

                $('#response').empty().html(response.html);
            }
        });
        return false;
    });
}

/* ==================================================
 Scroll to Top
 ================================================== */

BRUSHED.scrollToTop = function(){
    var windowWidth = $(window).width(),
        didScroll = false;

    var $arrow = $('#back-to-top');

    $arrow.click(function(e) {
        $('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
        e.preventDefault();
    })

    $(window).scroll(function() {
        didScroll = true;
    });

    setInterval(function() {
        if( didScroll ) {
            didScroll = false;

            if( $(window).scrollTop() > 1000 ) {
                $arrow.css('display', 'block');
            } else {
                $arrow.css('display', 'none');
            }
        }
    }, 250);
}
/* ==================================================
 Init
 ================================================== */

WINDOW.slider();

$(document).ready(function(){
    Modernizr.load([
        {
            test: Modernizr.placeholder,
            nope: '_include/js/placeholder.js',
            complete : function() {
                if (!Modernizr.placeholder) {
                    Placeholders.init({
                        live: true,
                        hideOnFocus: false,
                        className: "yourClass",
                        textColor: "#999"
                    });
                }
            }
        }
    ]);

    // Preload the page with jPreLoader
    $('body').jpreLoader({
        splashID: "#jSplash",
        showSplash: true,
        showPercentage: true,
        autoClose: true,
        splashFunction: function() {
            $('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
        }
    });

    WINDOW.nav();
    WINDOW.mobileNav();
    WINDOW.listenerMenu();

    WINDOW.goUp();
    WINDOW.filter();
    WINDOW.fancyBox();
    WINDOW.contactForm();
    WINDOW.scrollToTop();
    WINDOW.utils();
    WINDOW.accordion();
    WINDOW.toggle();
    WINDOW.toolTip();
});

$(window).resize(function(){
    WINDOW.mobileNav();
});

});