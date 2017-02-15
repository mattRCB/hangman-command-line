var inquirer = require('inquirer');

var Word = require('./Word.js');

var words = ['normal', 'objective', 'subjective'];

var wordToPlay = words[0];

var wordObject = new Word(wordToPlay);
wordObject.init();

console.log(wordObject.display());

function askLetter() {
	inquirer.prompt([
	{
		type: "input",
		name: "guess",
		message: "What letter..."
	}
	]).then(function(data) {

			wordObject.updateLetter(data.guess);

			console.log(wordObject.display());

			askLetter();
		
	})
}

askLetter();