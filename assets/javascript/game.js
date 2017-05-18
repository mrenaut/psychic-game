
	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var ties = 0;
	var guessesLeft = 10;
	var lettersGuessed = [];



	//need user to make a choice

	document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).
		toLowerCase();
		console.log(userGuess);

	//computer makes a choice
	var computerGuess = options[Math.floor(Math.random()*options.length)];
	//compare choices and determine a win, loss or tie
	if (userGuess =="a" || userGuess =="b" || userGuess =="c" || userGuess =="d" || userGuess =="e" || userGuess ==
		"f" || userGuess =="g" || userGuess =="h" || userGuess =="i" || userGuess =="j" || userGuess =="k" || userGuess ==
		"l" || userGuess =="m" || userGuess =="n" || userGuess =="o" || userGuess =="p" || userGuess =="q" || userGuess ==
		"r" || userGuess =="s" || userGuess =="t" || userGuess =="u" || userGuess =="v" || userGuess =="w" || userGuess ==
		"x" || userGuess =="y" || userGuess =="z") {
			//capture choices
			if (userGuess == computerGuess) {
				wins++;
			}	
			if (userGuess !== computerGuess) {
				guessesLeft--;

			}
			if (guessesLeft == 0) {
				losses++;
				guessesLeft=10;
			}

		//display the results to user
		var html =  "<h1>The Psychic Game</h1>" +
		"<p>Guess what letter I am thinking of...</p>" + 
		"<p>your guess: " + userGuess + "</p>" +
		"<p>wins:" + wins + "</p>" +
		"<p>losses:" + losses + "</p>" +
		"<p>guesses left: " + guessesLeft + "</p>";
		"<p2>guesses left: " + guessesLeft + "</p2>";
		

		document.querySelector('#game').innerHTML = html;

	}

	}  
// //
// 	document.getElementById("#guessed").innerHTML = [0];
// 	lettersGuessed.push