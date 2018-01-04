import { GameEngine } from './game.engine';
import { Player } from './../player/player.model';

import { Component, OnInit } from '@angular/core';
import { WordBank } from '../word-bank/wordbank';
import { PlayerService } from './../player/player.service';
import { WordListRepository } from './../word-list/word-list.repository';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  wordBank: WordBank;
  player: Player;
  gameEngine: GameEngine;

  constructor(private engine: GameEngine) {
    this.gameEngine = engine;
  }

  ngOnInit() {
    this.startGame();
  }

  guess(word: string) {
    this.engine.guess(word);
  }

  startGame()
  {
    this.gameEngine.newGame();
  }

}
