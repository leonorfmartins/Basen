$('#forma').submit(function(e) {
	e.preventDefault();

	$.ajax({
        url: 'http://127.0.0.1:80/Basen/',
        type: 'get',
        data: $('#forma').serialize(),
        success: function(data) {
                   console.log("got here");
                 }
    });
});
