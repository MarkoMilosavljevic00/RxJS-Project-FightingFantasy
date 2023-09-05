import { Corner } from "../enums/corner.enum";
import { Rules } from "../enums/rules.enum";
import { Fighter } from "./fighter";
import { Result } from "./result";

export class Fight {
    rules: Rules;
    redCorner: Fighter;
    blueCorner: Fighter;
    yourPick: Result;
    finalResult: Result;
    opponentPick: Result;
    yourScore: number;
    opponentScore: number;

    get favourite(): Corner {
        if (this.redCorner.overall > this.blueCorner.overall)
            return Corner.RedCorner;
        else return Corner.BlueCorner;
    }
}
