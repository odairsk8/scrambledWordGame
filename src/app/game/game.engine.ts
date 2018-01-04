import { ScoreService } from './../score/score.service';
import { ScrambledWord } from './../scrambled-word/scrambled-word.model';
import { Injectable } from '@angular/core';
import { WordBank } from "../word-bank/wordbank";
import { Player } from "../player/player.model";
import { WordListRepository } from "../word-list/word-list.repository";
import { PlayerService } from "../player/player.service";
import { WordGenerationResult } from '../word-bank/word-generation-result.enum';
import { GameResultType } from './game-result-type.enum';

@Injectable()
export class GameEngine {

    wordBank: WordBank;
    player: Player;
    currentMove: ScrambledWord;
    result;

    constructor(private wordListRepo: WordListRepository,
        private playerService: PlayerService,
        private scoreService: ScoreService) {
    }

    newGame() {
        this.player = this.playerService.getPlayer();
        this.result = undefined;
        var wordBank = this.tryGetNewWordBank();
        this.scoreService.start(this.player.level);
        if (wordBank == undefined)
            this.finishGame(GameResultType.NoMoreWordList);
        else {
            this.setWordBank(wordBank);
            this.currentMove = this.wordBank.newWord().word;
        }
    }

    tryGetNewWordBank(): WordBank {
        let wordList = this.wordListRepo.getWordList(this.player.level, this.player.completedLists);
        return WordBank.fromWordList(wordList);
    }

    guess(guessedWord: string) {
        let guessCorrect = this.currentMove.verifyGuess(guessedWord);
        if (guessCorrect) {
            this.scoreService.addHit();
            this.newMove();
        }
        else
            this.finishGame(GameResultType.Lost);
    }

    newMove() {
        let generationResult = this.wordBank.newWord();
        if (generationResult.result == WordGenerationResult.newWord)
            this.currentMove = generationResult.word;
        else {
            this.completePlayerList(this.wordBank.getWordListName());
            var newWords = this.tryGetNewWordBank();
            if (newWords == undefined) {
                newWords = this.tryGetNewWordBank();
                if (newWords == undefined)
                    this.finishGame(GameResultType.Won);
                else {
                    this.setWordBank(newWords);
                    generationResult = this.wordBank.newWord();
                    this.currentMove = generationResult.word;
                }
            }
            else {
                this.setWordBank(newWords);
                generationResult = this.wordBank.newWord();
                this.currentMove = generationResult.word;
            }
        }
    }

    setWordBank(wordbank: WordBank) {
        this.wordBank = wordbank;
        this.scoreService.setListName(this.wordBank.getWordListName());
        this.setPlayerLevel();
    }

    setPlayerLevel() {
        if (this.wordBank.getLevel() > this.player.level) {
            this.player.level++;
            this.scoreService.levelUp();
        }
    }

    completePlayerList(listName: string) {
        this.player.completedLists.push(listName);
    }

    finishGame(resultType: GameResultType) {
        this.result = this.scoreService.generateResults(resultType)
        this.playerService.save(this.player);
    }

}