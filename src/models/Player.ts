import { Card } from "./Card";

export class Player {
  cards: Card[] = [];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  initPlayer = () => {
    return { newPlayer: new Player([]) };
  };

  draw = (card: Card) => {
    this.cards.push(card);
    return { newPlayer: new Player(this.cards) };
  };

  multiDraw = (cards: Card[]) => {
    cards.map((card) => {
      this.cards.push(card);
    });
    // this.cards.concat(cards);
    return { newPlayer: new Player(this.cards) };
  };

  reset = () => {
    return { newPlayer: new Player([]) };
  };
}
