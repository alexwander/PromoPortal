$(document).ready(function() {

});

$(document).ready(function() {
    $('#animate').click(function() {
        $(this).animate(
            {
                width: '40px',
             height: '40px'
         },
         1000,
             'easeInBounce');
         });
     });

