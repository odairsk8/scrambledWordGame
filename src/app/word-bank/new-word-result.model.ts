import { WordGenerationResult } from "./word-generation-result.enum";
import { ScrambledWord } from "../scrambled-word/scrambled-word.model";

export class NewWordResult {
    result: WordGenerationResult;
    word?: ScrambledWord;
}