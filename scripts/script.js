$(document).ready(function() {
    $('html').dblclick(function() {
        alert('ouch');
    }); // end double click
    $('a').mouseover(function() {
    }); // end mouseover
}); // end ready

$('#theElement').on('click', function() {
// do something interesting
}); // end on
$('#theElement').on('mouseover', function() {
// do something else interesting
}); // end on

$('#theElement').on({
    'click' : function() {
// do something interesting
    }, // end click function
    'mouseover' : function() {
// do something interesting
    } // end mouseover function
}); // end on

$('ul').on('click', function() {
    $(this).css('text-decoration': 'line-through');
}

$('.main h2').click(function() {
    var $answer = $(this).next('.answer');
    if ($answer.is(':hidden')) {
        $answer.slideDown();
        $(this).addClass('close');
    } else {
        $answer.fadeOut();
        $(this).removeClass('close');
    }
}); // end click
}); // end of ready()