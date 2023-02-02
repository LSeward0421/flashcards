const chai = require("chai");
const expect = chai.expect;
const Game = require("../src/Game");
const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of Game", () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it("should have a currentRound property that is null by default", function () {
    expect(game.currentRound).to.equal(undefined);
  });

  it("should have a deck property that is null by default", function () {
    expect(game.deck).to.equal(undefined);
  });

  it("should have a cards property that is an empty array by default", function () {
    expect(game.cards).to.deep.equal([]);
  });

  it("should create cards from prototype questions", function () {
    game.createCards();
    expect(game.cards[0]).to.be.an.instanceOf(Card);
  });

  it("should create a deck of cards and set the deck property", function () {
    game.createCards();
    game.createDeck(game.cards);
    expect(game.deck).to.be.an.instanceOf(Deck);
  });

  it("should keep track of the current round", () => {
    game.createCards();
    game.createDeck();
    game.createRound();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it("should have a method to start the game", () => {
    expect(game).to.have.property("start");
    expect(game.start).to.be.a("function");
  });
});
