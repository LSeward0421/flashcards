const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    };
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    // Calculate the error, which is the Estimate – Correct Value.
    // Divide by the Correct Value.
    // Multiply by 100 to produce a percentage.
    let correctGuesses = this.turns - this.incorrectGuesses.length;
    let correctValue = correctGuesses / this.turns;
    let percent = correctValue * 100;
    return parseInt(percent);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
