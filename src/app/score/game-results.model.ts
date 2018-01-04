
import { GameResultType } from "../game/game-result-type.enum";
import { KeyValuePair } from './../shared/utils/key-value-pair.model';


export class GameResult {
    type: GameResultType;
    message: { main, second };
    statistics: Array<KeyValuePair> = [];
}