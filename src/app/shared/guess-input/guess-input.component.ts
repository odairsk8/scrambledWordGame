import { Component, OnInit, EventEmitter, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.css']
})
export class GuessInputComponent implements OnInit {

  @Output() onGuessWord: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('guessInput') guessInput: ElementRef;
  constructor() { }

  ngOnInit() {
    this.guessInput.nativeElement.focus();
  }

  guess() {
    this.onGuessWord.emit(this.guessInput.nativeElement.value);
    this.guessInput.nativeElement.value = '';
    this.guessInput.nativeElement.focus();
  }

}
