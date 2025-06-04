import { Hand } from 'pokersolver';
import { Card } from './card';

export function evaluateWinner(
  players: { name: string; hand: Card[] }[],
  community: Card[],
) {
  const formatted = players.map((player) => {
    const allCards = [...player.hand, ...community];
    const converted = allCards.map((card) => {
      const rank = card.rank === '10' ? 'T' : card.rank;
      return rank + card.suit[0];
    });
    return {
      name: player.name,
      hand: Hand.solve(converted),
    };
  });

  const winners = Hand.winners(formatted.map((p) => p.hand));
  const winner = formatted.find((p) => p.hand === winners[0]);

  return {
    winner: winner?.name,
    winningHand: winners[0].descr,
  };
}
