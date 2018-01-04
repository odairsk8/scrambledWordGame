import { IScrambler } from './iScrambler';
export class AlphabeticallyScrambler implements IScrambler {

    scramble(word: string): string {
        return word.split('').sort().join('');
    }

}