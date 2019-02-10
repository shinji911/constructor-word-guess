function Letter(letter) {
    this.ltr = letter; //holds underlying letter
    this.guess = false;
    this.showLtr = function() {
        if (this.guess === true) {
            return this.ltr;
        } else {
            return "_"
        };
    };
    this.checkLtr = function(inputLtr) {
        if (inputLtr === this.ltr) {
            this.guess = true;
        }
    };
};

module.exports = Letter;