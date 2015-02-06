$(document).ready(function(){

	$('#question1').show();
	$('#question2').hide();
	$('#question3').hide();

	guess = $('input[name="capitalCity"]:checked').val;
	if (guess = Paris)
		console.log(guess);

});