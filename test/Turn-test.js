const { expect } = require("chai");
const Turn = require('../src/Turn');

describe("Turn", () => {
  let turn;
  let guess = "Correct";
  let card = {
    correctAnswer: "Correct"
  };

  beforeEach(() => {
    turn = new Turn(guess, card);
  });

  it("should return the guess", () => {
    expect(turn.returnGuess()).to.equal(guess);
  });
});
