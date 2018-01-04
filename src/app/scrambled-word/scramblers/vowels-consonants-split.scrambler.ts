import { IScrambler } from './iScrambler';
export class VowelsConsonantSplitScrambler implements IScrambler {
    scramble(word: string): string {
        let voewls = '';
        let consonants = '';
        word.split('').forEach(l => {
            if (this.isVoewl(l))
                voewls += l;
            else
                consonants += l;
        });
        return voewls + consonants;
    }

    private isVoewl(letter: string) {
        return letter.match(/[aeiou]/gi);
    }
}