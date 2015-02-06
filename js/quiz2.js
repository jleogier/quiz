$(document).ready(function() {

	// shows first question only

	$('#question1').show();
	$('#question2').hide();
	$('#question3').hide();
	$('#end').hide();		
	
/******* First question interaction ********/

	$('#submitButton1').click(function(e) {
		e.preventDefault();

		// Gets answer

		answer1 = $.trim($('#answer1').val());		
		$('#answer1').val('');

		// Checks answer

		if (answer1 === "paris") {
			console.log("You're right!");
			$('#question1').hide();
			$('#question2').show();
			$('#question3').hide();
			$('#end').hide();
		}

		else {

			$('#wrong1').append("<p>You're Wrong! Guess Again!</p>");
		}

	});

/******* Second question interaction ********/

	$('#submitButton2').click(function(e) {
		e.preventDefault();

		// Gets answer

		answer2 = $('#answer2').val();
		$('#answer2').val('');
		
		// Checks answer

		if (answer2 === "lyon") {
			console.log("You're right!");
			$('#question1').hide();
			$('#question2').hide();
			$('#question3').show();	
			$('#end').hide();
		}

		else {

			$('#wrong2').append("<p>You're Wrong! Guess Again!</p>");
		}				

		console.log(answer2);
	});

/******* Third question interaction ********/

	$('#submitButton3').click(function(e) {
		e.preventDefault();

		// Gets answer

		answer3 = $('#answer3').val();
		$('#answer3').val('');

		// Checks answer

		if (answer3 === "cannes") {
			console.log("You're right!");
			$('#question1').hide();
			$('#question2').hide();
			$('#question3').hide();	
			$('#end').show();			
		}

		else {

			$('#wrong3').append("<p>You're Wrong! Guess Again!</p>");
		}

	});		

});





















