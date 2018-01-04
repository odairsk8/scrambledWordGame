
import { ScrambleFactory } from './../scrambled-word/scramble.factory';
import { NewWordResult } from './new-word-result.model';
import { WordList } from "../word-list/word-list.model";
import { WordGenerationResult } from './word-generation-result.enum';
import { Utils } from '../shared/utils';

export class WordBank {

    private wordList: WordList;
    wordQueue = [];
    wordsLength: number;

    public static fromWordList(wordList: WordList): WordBank {
        if (!wordList)
            return undefined;

        let wordBank = new WordBank();
        wordBank.wordList = wordList;
        wordBank.wordsLength = wordList.words.length;
        wordBank.wordQueue = Utils.shuffleArray(wordBank.wordList.words);
        return wordBank;
    }

    public newWord(): NewWordResult {
        let newWord = this.wordQueue.pop();
        if (newWord) {
            return {
                word: ScrambleFactory.newScrambledWord(newWord),
                result: WordGenerationResult.newWord,
            }
        }
        else {
            return {
                result: WordGenerationResult.noWords,
            }
        }

    }

    public getWordListName() {
        return this.wordList.name;
    }

    public getLevel(){
        return this.wordList.level;
    }
}