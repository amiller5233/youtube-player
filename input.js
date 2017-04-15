$(document).ready(function(){
	var input, code, good = false;

	// READ INPUT BAR
	$('#url').keyup(function(){
		input = $('#url').val();
		code = input.split("=").pop();
		if(code.length == 11){
			good = true;
		} else {
			good = false;
		}
	});

	// CLICK PAY BUTTON
	$('#ytplay').click(function(){

		// Create first player
		if(player == undefined) {
			if(good){
				createPlayer(code);
				closeErrors();
			} else {
				console.log('bad ID');
				$('#badIdError').slideDown();
			}
		} else {
			if(code == curId) {
				console.log('same, do nothing.');
				$('#sameIdError').slideDown();
			} else if(code != curId && good) {
				$('#playPause').hide();
				player.destroy();
				console.log('destroyed');
				player = undefined;
				createPlayer(code);
				closeErrors();
				console.log('new');
			}
		}
	});
	// CLICK PLAY PAUSE
	$('#playPause').click(function(){
		toggleYT();
	});
});

function closeErrors() {
	$('.error').each(function(){
		$(this).slideUp();
	});
}