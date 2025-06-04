import { Deck } from './deck';
import { Player } from './player';
import { evaluateWinner } from './handEvaluator';
import { Card } from './card';

export class PokerGame {
  players: Player[];
  deck: Deck;
  communityCards: Card[] = [];

  constructor(playerNames: string[]) {
    this.deck = new Deck();
    this.players = playerNames.map(
      (name) => new Player(name, name.startsWith('Bot')),
    );
  }

  startGame() {
    this.deck.reset();
    this.communityCards = [];

    this.players.forEach((player) => {
      player.receiveCards(this.deck.draw(2));
    });

    this.deck.draw();
    this.communityCards.push(...this.deck.draw(3));

    this.deck.draw();
    this.communityCards.push(...this.deck.draw(1));

    this.deck.draw();
    this.communityCards.push(...this.deck.draw(1));

    const result = evaluateWinner(this.players, this.communityCards);
    return {
      result,
      communityCards: this.communityCards,
      players: this.players.map((p) => ({
        name: p.name,
        hand: p.hand,
      })),
    };
  }
}
