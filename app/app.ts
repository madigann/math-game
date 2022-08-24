import { Player } from './player';
import { Game } from './game';
import {getInputValue} from './utility';

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = getInputValue('playername');

  const problemCount: number = Number(getInputValue('problemCount'));
  const factor: number = Number(getInputValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});