let Letter = require("./letter.js");

let Word = function (inputWord) {
    this.wordArray = [];
    for (let i = 0; i < inputWord.length; i++) {
        let ltrObj = new Letter(inputWord[i]);
        this.wordArray.push(ltrObj);
    };
    this.showWord = function () {
        let wordPrt = [];
        for (let u = 0; u < this.wordArray.length; u++) {
            wordPrt.push(this.wordArray[u].showLtr());
        };
        return wordPrt.join(" ");
    };
    this.enterLtr = function (input) {
        for (let y = 0; y < this.wordArray.length; y++) {
            this.wordArray[y].checkLtr(input);
        };
    };
    this.checkDone = function () {
        let doneCheck = 0;
        for (let t = 0; t < this.wordArray.length; t++) {
            if (this.wordArray[t].guess === true) {
                doneCheck++;
            }
        };
        if (doneCheck === this.wordArray.length) {            
            return true;
        } else {
            return false;
        };
    };
};

module.exports = Word;