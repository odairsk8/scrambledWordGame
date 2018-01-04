import { GameResult } from './game-results.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GameResultType } from '../game/game-result-type.enum';

@Injectable()
export class ScoreService {

    public hits: number = 0;
    public startLevel = 1;
    public currentLevel = 1;
    public wordListName = '';
    public hitsChanged: Subject<number> = new Subject<number>();
    public levelChanged: Subject<number> = new Subject<number>();
    public wordListChanged: Subject<string> = new Subject<string>();

    private readonly messageWin: string = "You Win, Congratulations!|Try again soon, there is always wordlists being added.";
    private readonly messageLost: string = "You Lose, Try again|Practice leads to perfection.";
    private readonly messageTryAgainSoon = "No more wordlists available|Try again soon, there is always wordlists being added.";

    start(playerLevel: number) {
        this.startLevel = playerLevel;
        this.currentLevel = playerLevel;
        this.levelChanged.next(this.currentLevel);
    }

    public addHit() {
        this.hits++;
        this.hitsChanged.next(this.hits);
    }

    public levelUp() {
        this.currentLevel++;
        this.levelChanged.next(this.currentLevel);
    }

    public setListName(wordListName: string) {
        this.wordListName = wordListName;
        this.wordListChanged.next(this.wordListName);
    }

    public generateResults(resultType: GameResultType) {

        let result = new GameResult();
        result.type = resultType;
        result.statistics.push({ name: 'Hits', value: this.hits });
        result.statistics.push({ name: 'Level up', value: this.currentLevel - this.startLevel });

        if (resultType == GameResultType.Won) {
            result.message = { main: this.messageWin.split('|')[0], second: this.messageWin.split('|')[1] };
        } else if (resultType == GameResultType.Lost) {
            result.message = { main: this.messageLost.split('|')[0], second: this.messageLost.split('|')[1] };
        }
        else if (resultType == GameResultType.NoMoreWordList) {
            result.message = { main: this.messageTryAgainSoon.split('|')[0], second: this.messageTryAgainSoon.split('|')[1] };
            result.statistics = [];
        }

        return result;
    }

    public getListName() { return this.wordListName; }

    public getLevel() { return this.currentLevel };

}