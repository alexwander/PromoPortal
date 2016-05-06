$(document).ready(function() {
    $('.sm').smartmenus({
        showFunction: function($ul, complete) {
            $ul.slideDown(250, complete);
        }
    }); // end smartmenus
}); // end ready

