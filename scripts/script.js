$(document).ready(function() {

});

$(document).ready(function() {
    $('#animate').click(function() {
        $(this).animate(
            {
                width: '400px',
             height: '400px'
         },
         1000,
             'easeInBounce'); // end animate
         }); // end click
     }); // end ready

$('#photo').width(0).height(0).css('opacity',0);
 $('#caption').hide();
 $('#photo').animate(
     {
     width: '200px',
         height: '100px',
         opacity: 1
     },
 1000,
     function() {
     $('#caption').fadeIn(1000);
     }
 ); // end animate