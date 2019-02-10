let Word = require("./word.js");
let wordBank = ["pearl", "garnet", "amethyst", "steven", "peridot", "lars", "connie", "greg"]
let inquirer = require('inquirer');

let gameWord;

let startGame = function () {
    gameWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);
    console.log(gameWord.showWord())
    askLtr();
};

let askLtr = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "guessLetter",
            message: "Guess a Letter!",
            validate: function checkKey(name) {
                if (name.length > 1) {
                    console.log("Must Enter a Single Letter");
                    return false;
                } else if (name.toLowerCase().charCodeAt(0) < 123 && name.toLowerCase().charCodeAt(0) > 96) {
                    return true;
                } else {
                    console.log("Must Enter a Letter");
                    return false;
                };
            }
        }
    ]).then(function (user) {
        gameWord.enterLtr(user.guessLetter);
        console.log(gameWord.showWord());
        let doneYes = gameWord.checkDone();
        if (doneYes) {
            console.log("You Won!");
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "playAgain",
                    message: "Play Again?"
                }
            ]).then(function(play) {
                if (play.playAgain) {
                    startGame();
                } else {
                    return;
                };
            });
        } else {
            askLtr();
        };
    });
};

startGame();