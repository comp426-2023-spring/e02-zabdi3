// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function pageLoad() {
    $('.shots').hide()
    $('.rpsls').hide()
    $('#help').hide()
    $('#result').hide()
}

function showHideShots() {
    // Get the info from the checkbox
  	let check = document.getElementById('opponent');
      // Check if the checkbox is checked and show or hide options accordingly
    if (check.checked == true) {
      // Here, instead of just showing all of the options, use similar logic to 
      // check which of the game radio buttons is checked and show only those
      // options relevant to the game being selected (rps or rpsls). You can 
      // use similar jQuery
        $('.shots').show()
        if(document.getElementById('rps').checked == true) {
            $('.rpsls').hide();
        } else {
            $('.rpsls').show();
        }
    } else {
          $('.shots').hide()
    }
    $('#result').hide();
}
      // This function clears the input form and also resets the shot selection
      // radio buttons. 
function startOver() {
    document.getElementById('userinput').reset();
    showHideShots();
    $('#help').hide();
    $('#rules')[0].innerText = "Show Rules";
}

async function playGame() {
    let check = document.getElementById('opponent');
    // Get which game is being played based on the value in the form
	let game = $('input[type=radio][name=game]:checked').val();
	// Get which shot is being played based on the value in the form
	let shot = $('input[type=radio][name=shot]:checked').val();
	// Identify the base URL based on browser information
	let baseurl = window.location.href + 'app/'
	// Log the base URL
	console.log(baseurl)
	// This constructs a URL for the opponent option ONLY. To incorporate
	// the other option, you can use a conditional to change the URL based
	// on what is selected. You could also write separate functions, or use
	// a conditional somewhere above in this function to construct the 
	// correct URL
	let url = baseurl + game + '/play/' // time to check
    if (check.checked == true) {
        url += shot;
    }
    // Log the full URL
	console.log(url)	

	let response = await fetch(url)
	let result = await response.json()
	// Log the result
	console.log(result)
	// Here you should include code that uses the DOM API or jQuery to 
	// manipulate another block of HTML in the interface to display the 
	// results in some way. 
    document.getElementById('playerImage').src = "./img/" + result.player + ".jpg";
    if (check.checked == true) {
        document.getElementById('opponentImage').src = "./img/" + result.opponent + ".jpg";
        document.getElementById('gameResult').innerHTML =
            "Result: " + result.result +
            "<br> You played: " + result.player +
            "<br> Opponent played: " + result.opponent;
    } else {
        document.getElementById('gameResult').innerText = "Result: " + result.player;
    }
    $('#result').show
}

function help() {
    $('#rules').toggle();
    console.log($('#rules')[0].innerText);
    if( $('#rules')[0].innerText == "Show Rules") {
        $('#rules')[0].innerText = "Hide Rules";
    } else {
        $('#rules')[0].innerText = "Show Rules";
    }
}
