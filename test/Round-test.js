const chai = require("chai");
const expect = chai.expect;
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");
const Turn = require("../src/Turn");

describe("Round", () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Larry's favorite kind of potato?",
      ["mashed", "fried", "baked"],
      "fried"
    );
    card2 = new Card(2, "How many cats does Larry have?", [0, 1, 3], 3);
    card3 = new Card(
      3,
      "What city does Larry live in?",
      ["Dallas", "Denver", "Boston"],
      "Dallas"
    );

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("should start with a deck", () => {
    expect(round.deck).to.equal(deck);
  });

  it("should start with no turns", () => {
    expect(round.turns).to.equal(0);
  });

  it("should return the current card being played", () => {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
    console.log(round.returnCurrentCard());
  });

  it("should update the turns count", () => {
    round.takeTurn("fried");
    expect(round.turns).to.equal(1);
  });

  it("should evaluate the guess", () => {
    expect(round.takeTurn("mashed")).to.equal("Incorrect!");
    expect(round.takeTurn(3)).to.equal("Correct!");
  });

  it("should be able to store incorrect guesses", () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn("wrong answer");
    expect(round.incorrectGuesses).to.deep.equal([round.currentCard.id]);
  });

  it("should return the feedback for the guess", () => {
    expect(round.takeTurn("fried")).to.equal("Correct!");
  });
});
