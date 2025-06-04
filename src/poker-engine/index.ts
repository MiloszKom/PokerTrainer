import { PokerGame } from './game';

const game = new PokerGame(['Me', 'Bot1', 'Bot2']);
const outcome = game.startGame();

console.log('Community Cards:', outcome.communityCards);
outcome.players.forEach((p) => {
  console.log(`${p.name}'s hand:`, p.hand);
});
console.log('Winner:', outcome.result.winner);
console.log('Winning Hand:', outcome.result.winningHand);
