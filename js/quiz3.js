$(document).ready(function() {

/********* Declare Variables and Arrays ************/

	var questions = [
		"What's the capital of France?", 
		"What's the second largest city in France?",
		"What's the funnest city in France?"		
	];

	var answers = [
		"paris",
		"lyon",
		"cannes"
	];

	var score = 0;

	var guessNumber = 1;


/********* Submit Event ************/	


	$('#submitButton').click(function(e){
		e.preventDefault();

		// Gets Input

		guess = $.trim($('#guess').val()).toLowerCase();
		$('#guess').val('');
		console.log(guess);

		// Checks Input

		checker(1, guess);
		checker(2, guess);
		checker(3, guess);

		// Gets Question
		
		guessNumber += 1;
		displayQuestions(guessNumber);

	});


/********* Displays Question ************/	
	
	function displayQuestions(guessNumber) {

		guessNumber;

		if (guessNumber === 1) {			
			$('#display').text(questions[0]);
		}

		else if (guessNumber === 2) {					
			$('#display').text(questions[1]);			
		}		

		else if (guessNumber === 3) {			
			$('#display').text(questions[2]);
		}

		else if (guessNumber === 4) {
			$('#display').text("Congrats! You've scored " + score + " out of 3!");
		}
		
	}


/********* Checks Answer ***************/	

	function checker(guessNumber, guess) {		

		if (guessNumber === 1 && guess === answers[0]) {
			score += 1;			
		}


		else if (guessNumber === 2 && guess === answers[1]) {
			score += 1;
		}


		else if (guessNumber === 3 && guess === answers[2]) {
			score += 1;
		}
	}

/******** New Game *******************/

	function newGame() {
		var guessNumber = 1;
		displayQuestions(1);
		score = 0;			
	}
					

	$('#newGameButton').click(function(e) {
		e.preventDefault;
		newGame();
	});



/******** Starts New Game on Start up ****/

	newGame();


});




















