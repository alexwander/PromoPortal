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