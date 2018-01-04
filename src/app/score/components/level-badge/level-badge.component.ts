import { ScoreService } from './../../score.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-badge',
  templateUrl: './level-badge.component.html',
  styleUrls: ['./level-badge.component.css']
})
export class LevelBadgeComponent implements OnInit {

  level = this.scoreService.getLevel();
  constructor(private scoreService: ScoreService) {
    this.scoreService.levelChanged.subscribe(newLevel => this.level = newLevel);
  }

  ngOnInit() {

  }

}
