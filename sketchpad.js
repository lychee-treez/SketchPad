var size = 48;
var color;


$(document).ready(function() {
	
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

var restart = function(){

	$(document).ready(function(){
		$('.marked').removeClass('marked');
	});

}

/*function changeColor(var color){

	$(document).ready(function(){
		$('.box').hover(function(){
			if (color == 'blue'){
				$(this).addClass('blue');
			} else if (color == 'green'){
				$(this).addClass('green');
			} else if (color == 'red'){
				$(this).addClass('red');
			}
		});
	});
}*/