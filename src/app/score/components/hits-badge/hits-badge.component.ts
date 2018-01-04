import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../score.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-hits-badge',
  templateUrl: './hits-badge.component.html',
  styleUrls: ['./hits-badge.component.css']
})
export class HitsBadgeComponent implements OnInit {


  hits: number;
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.hits = 0;
    this.scoreService.hitsChanged.subscribe(newHits => this.hits = newHits);
  }

  // ngOnDestroy(): void {
  //   this.scoreService.hitsChanged.unsubscribe();
  // }

}
