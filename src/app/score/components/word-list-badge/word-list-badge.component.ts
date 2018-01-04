import { ScoreService } from './../../score.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-list-badge',
  templateUrl: './word-list-badge.component.html',
  styleUrls: ['./word-list-badge.component.css']
})
export class WordListBadgeComponent implements OnInit {

  wordListName = this.scoreService.getListName();

  constructor(private scoreService: ScoreService) {
    this.scoreService.wordListChanged.subscribe(wordListName => {
      this.wordListName = wordListName;
    });
  }

  ngOnInit() {
    
  }

}
