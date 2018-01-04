
import { Injectable } from '@angular/core';
import { WordList } from './word-list.model';
import { Utils } from '../shared/utils';

@Injectable()
export class WordListRepository {

    private wordLists: WordList[] = [];

    constructor() {
        this.wordLists = Object.assign(new Array<WordList>(), [...this.jsonData()]);
    }

    public getWordList(playerLevel: number, excludedLists: Array<string> = []) {
        let wordLists = this.wordLists.filter(c => c.level == playerLevel && !excludedLists.find(d => c.name == d));
        if (wordLists.length == 0)
            wordLists = this.wordLists.filter(c => c.level == playerLevel + 1 && !excludedLists.find(d => c.name == d));

        if (wordLists.length > 0)
            return wordLists[Utils.getRandomInteger(0, wordLists.length - 1)];
        else
            return undefined;
    }

    private jsonData() {
        return [{
            "name": "Colors I",
            "shortDescription": "List with colours name",
            "level": 1,
            "words": ["red", "blue", "yellow", "white", "black", "green"]
        }, {
            "name": "Senses I",
            "shortDescription": "Verbs related to senses",
            "level": 2,
            "words": ["see", "taste", "smell", "touch", "hear", "snif"]
        }];
    }
}