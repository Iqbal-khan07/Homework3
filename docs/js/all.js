(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "id" },
            { "data": "LatD" },
            { "data": "LatM" },
            { "data": "LatS" },
            { "data": "NS" },
            { "data": "LonD" },
            { "data": "LonM" },
            { "data": "LonS" },
            { "data": "EW" },
            { "data": "City" },
            { "data": "State" }
        ]
    } );

})(jQuery);
