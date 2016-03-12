    function filter(element) {
        var value = $(element).val();

        $("#elements > li").each(function() {
            if ($(this).text().search(value) > 0) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    }
