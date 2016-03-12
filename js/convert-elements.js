$(function() {
    $( "#elements li" ).draggable({
        connectToSortable: "#elements",
        helper: "clone",
        revert: "invalid"
    });
    
    $( "#elements" ).sortable({
        revert: true,
        receive: function(event, ui) {
            var html = [];
            $(this).find('li').each(function() {
                html.push('<div class="toggle">'+$(this).html()+'</div>');
            });
            $(this).find('li').replaceWith(html.join(''));
        }
    });
});