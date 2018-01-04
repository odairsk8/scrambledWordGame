import { Injectable } from "@angular/core";
import { IScrambler } from "./scramblers/iscrambler";
import { ReverseWordScrambler } from "./scramblers/reverseWord.scrambler";
import { AlphabeticallyScrambler } from "./scramblers/alphabetically.scrambler";
import { EvenOrOddScrambler } from "./scramblers/even-or-odd.scrambler";
import { VowelsConsonantSplitScrambler } from "./scramblers/vowels-consonants-split.scrambler";
import { Utils } from "../shared/utils";
import { ScrambledWord } from "./scrambled-word.model";

@Injectable()
export class ScrambleFactory {

    constructor() { }

    public static getRandomScrambler(): IScrambler {
        let scramblers: Array<IScrambler> = [
            new ReverseWordScrambler(),
            new AlphabeticallyScrambler(),
            new EvenOrOddScrambler(),
            new VowelsConsonantSplitScrambler()];
        return scramblers[Utils.getRandomInteger(0, scramblers.length)];
    }

    public static newScrambledWord(word: string, scrambler: IScrambler = this.getRandomScrambler()): ScrambledWord {
        return new ScrambledWord(word, scrambler);
    }

}