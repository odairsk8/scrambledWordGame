import { IScrambler } from "./scramblers/iscrambler";

export class ScrambledWord {

    public original: string;
    public scrambled: string;

    constructor(word: string, scrambler: IScrambler) {
        this.original = word;
        this.scrambled = scrambler.scramble(this.original);
    }

    verifyGuess(guess: string){
        return this.original.trim().toLowerCase() == guess.trim().toLowerCase();
    }

}