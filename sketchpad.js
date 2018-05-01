var size = 80;
var color = 'blue';


$(document).ready(function() {

	for (var i = 0; i < size; i++){
		for(var j = 0; j < size+50; j++){
			$('#container').append('<div class="box"> </div>');
		}
		$('#container').append('<br>');
	}

	$('#red').click(function(){
		color = 'red';
	})

	$('#blue').click(function(){
		color = 'blue';
	})

	$('#green').click(function(){
		color = 'green';
	})

	$('.box').hover(function(){
		console.log("colored");
		$(this).addClass(color);
	});

});

var restart = function(){
	console.log("in restart");
	$(document).ready(function(){
		$('.blue').removeClass('blue');
		$('.green').removeClass('green');
		$('.red').removeClass('red');
	});
}
