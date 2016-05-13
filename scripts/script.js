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