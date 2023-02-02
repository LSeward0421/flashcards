const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");

class Game {
  constructor() {
    this.deck;
    this.cards = [];
    this.currentRound;
  }

  createCards() {
    this.cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
  }

  createRound() {
    this.createDeck(this.cards);
    this.currentRound = new Round(this.deck);
  }

  createDeck(cards) {
    this.deck = new Deck(cards);
  }

  start() {
    this.createCards();
    this.createRound();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
