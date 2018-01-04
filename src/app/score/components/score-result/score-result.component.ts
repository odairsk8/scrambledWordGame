import { PlayerService } from './../../../player/player.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameResult } from '../../game-results.model';

@Component({
  selector: 'app-score-result',
  templateUrl: './score-result.component.html',
  styleUrls: ['./score-result.component.css']
})
export class ScoreResultComponent implements OnInit {

  @Input('result') result: GameResult;
  @Output('newGameClick') newGameClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  newGame(){
    this.newGameClick.emit();
  }

  reset(){
    this.playerService.resetUser();
    this.newGameClick.emit();
  }

}
