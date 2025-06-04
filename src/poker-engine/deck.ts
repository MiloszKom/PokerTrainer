import { Card, Suit, Rank } from './card';

export class Deck {
  private cards: Card[] = [];

  constructor() {
    this.reset();
  }

  reset() {
    const suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks: Rank[] = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A',
    ];
    this.cards = suits.flatMap((suit) => ranks.map((rank) => ({ suit, rank })));
    this.shuffle();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw(count = 1): Card[] {
    return this.cards.splice(0, count);
  }
}
