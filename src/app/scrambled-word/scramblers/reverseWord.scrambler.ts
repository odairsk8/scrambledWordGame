import { IScrambler } from './iScrambler';
export class ReverseWordScrambler implements IScrambler{
    scramble(word: string): string {
        return word.split('').reverse().join('');
    }   
}