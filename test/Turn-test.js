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
  });

  it("should evaluate the guess for the correct answer", () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it("should return 'Correct!' for a correct guess", () => {
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it("should return 'Incorrect!' for a wrong guess", () => {
    turn = new Turn('wrong guesss', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
});
