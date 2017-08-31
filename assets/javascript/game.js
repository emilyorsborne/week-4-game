// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================

// Computer selected random number
var randomNumber = ""

var winCounter = 0;
var lossCounter = 0;

var guessNumTotal = 0;

var blueGemValue = 0;
var purpleGemValue = 0;
var yellowGemValue = 0;
var pinkGemValue = 0;



// FUNCTIONS (These are bits of code that we will call upon to run when needed).
// ==================================================================================================


//function to start/restart the game 
function startGame() {

	//randomly select a number between 19-120
	randomNumber = Math.floor(Math.random() * 102) +19;

	//input random number in randomNumber container
	document.getElementById("randomNumber").innerHTML = randomNumber;
	
	// $("#randomNumber").html(= randomNumber);


	//assigns each gem a random number from 1-12
	blueGemValue = Math.floor(Math.random() * 13) +1;
	console.log(blueGemValue);

	purpleGemValue = Math.floor(Math.random() * 13) +1;
	console.log(purpleGemValue);

	yellowGemValue = Math.floor(Math.random() * 13) +1;
	console.log(yellowGemValue);

	pinkGemValue = Math.floor(Math.random() *13) +1;
	console.log(pinkGemValue);

}


// //function for clicking on a gem {
	$("blueGem").click(function(){
		guessNumTotal = blueGemValue;
		console.log(guessNumTotal);
	})


//function for completing the round 
function roundComplete() {
	if(guessNumTotal === randomNumber) {
		winCounter++;
		alert("You win!");
		document.getElementById("numWins").innerHTML = winCounter;
		startGame();
	}

	else if(guessNumTotal > randomNumber) {
		lossCounter++;
		alert("You lose");
		document.getElementById("numLosses").innerHTML = lossCounter;
		startGame();
	}
}





// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

startGame();





// $("#blueGem").click(function() {
//     $('#yourScore').html(function(i, val) { return +val+#yourScore });
// }

