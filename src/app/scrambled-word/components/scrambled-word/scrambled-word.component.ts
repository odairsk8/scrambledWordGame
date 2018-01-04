import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { ScrambledWord } from '../../scrambled-word.model';

@Component({
  selector: 'app-scrambled-word',
  templateUrl: './scrambled-word.component.html',
  styleUrls: ['./scrambled-word.component.css']
})
export class ScrambledWordComponent implements OnInit {

  @Input('scrambledWord') scrambledWord: ScrambledWord;

  constructor() { }

  ngOnInit() {
  }

}
