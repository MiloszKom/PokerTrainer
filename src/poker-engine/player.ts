import { Card } from './card';

export class Player {
  name: string;
  hand: Card[] = [];
  isBot: boolean;

  constructor(name: string, isBot = false) {
    this.name = name;
    this.isBot = isBot;
  }

  receiveCards(cards: Card[]) {
    this.hand = cards;
  }
}
