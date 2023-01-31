const chai = require("chai");
const expect = chai.expect;
const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Deck", () => {
  let deck;
  let card1;
  let card2;
  let card3;

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
  });

  it("should be initialized with an array of cards", () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it("should know the number of cards in the deck", () => {
    expect(deck.countCards()).to.equal(3);
  });
});
