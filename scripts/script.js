$('a[href^="http://"]').each(function() {
    2 var href = $(this).attr('href');
    3 href = href.replace('http://','');
    4 $(this).after(' (' + href + ')');
    5 });
