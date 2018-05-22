import {Competitor} from "./competitor";
import {Fees} from "./Fees";

export interface AppState {
    readonly competitors : Competitor[];
    readonly fees : Fees;
}