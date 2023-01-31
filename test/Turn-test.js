const { expect } = require("chai");
const Turn = require('../src/Turn');

describe("Turn", () => {
  let turn;
  let guess = "correct guess";
  let card = {
    correctAnswer: "correct guess"
  };

  beforeEach(() => {
    turn = new Turn(guess, card);
  });

  it("should return the guess", () => {
    expect(turn.returnGuess()).to.equal(guess);
  });

  it("should return the card", () => {
    expect(turn.returnCard()).to.equal(card);
  })
});
