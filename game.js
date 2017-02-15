var inquirer = require('inquirer');

var Word = require('./Word.js');

var words = ['normal', 'objective', 'subjective'];

var wordToPlay = words[Math.floor(Math.random() * words.length)];


var wordObject = new Word(wordToPlay);
wordObject.init();

console.log(wordObject.display());

function askLetter() {
	inquirer.prompt([
	{
		type: "input",
		name: "guess",
		message: "Type a letter to guess..."
	}
	]).then(function(data) {
	
	if (wordObject.guessLimit > wordToPlay.length+1) {
		console.log('Too many guesses. The word was ' + wordToPlay + '. \nThanks for playing.');
		return;
		} else {
			wordObject.updateLetter(data.guess);
			console.log(wordObject.display());
			if (wordObject.wordIsComplete()) {
				console.log('The word was ' + wordToPlay + '. \nThanks for playing.');
				return;
			}

			askLetter();
		}		
	});
}

askLetter();