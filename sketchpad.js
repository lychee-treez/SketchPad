


$(document).ready(function() {
	var size = 93;
	for (var i = 0; i < size; i++){
		for(var j = 0; j < size; j++){
			$('#container').append('<div class="box"> </div>');
		}
		$('#container').append('<br>');
	}

	$('.box').hover(function(){
		$(this).addClass('marked');
	});
});