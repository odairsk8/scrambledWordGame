import { ScoreResultComponent } from './score/components/score-result/score-result.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { GameComponent } from './game/game.component';
import { ChallengeQuestionComponent } from './shared/challenge-question/challenge-question.component';
import { ScrambledWordComponent } from './scrambled-word/components/scrambled-word/scrambled-word.component';
import { GameEngine } from './game/game.engine';
import { PlayerService } from './player/player.service';
import { WordListRepository } from './word-list/word-list.repository';
import { GuessInputComponent } from './shared/guess-input/guess-input.component';
import { HitsBadgeComponent } from './score/components/hits-badge/hits-badge.component';
import { ScoreService } from './score/score.service';
import { LevelBadgeComponent } from './score/components/level-badge/level-badge.component';
import { WordListBadgeComponent } from './score/components/word-list-badge/word-list-badge.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    GameComponent,
    ChallengeQuestionComponent,
    ScrambledWordComponent,
    GuessInputComponent,
    HitsBadgeComponent,
    LevelBadgeComponent,
    WordListBadgeComponent,
    ScoreResultComponent
  ],
  imports: [
    AppRoutes,
    FormsModule,
    BrowserModule
  ],
  providers: [GameEngine, WordListRepository, PlayerService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
