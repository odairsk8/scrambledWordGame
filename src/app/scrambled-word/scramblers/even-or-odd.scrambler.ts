import { IScrambler } from './iScrambler';
export class EvenOrOddScrambler implements IScrambler {

    private readonly alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    scramble(word: string): string {
        
        let odds = '';
        let evens = '';
        word.split('').forEach(l => {
            let wordIndex = this.alphabet.indexOf(l);
            wordIndex % 2 == 0 ? evens += l : odds += l;
        });
        return evens+odds;
    }

}