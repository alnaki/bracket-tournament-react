import { IDuel, DuelScoring, Duel } from "./duel";

export interface IRound {
    duels: IDuel[];
}

export class Round implements IRound {
    duels: IDuel[];
    constructor(){
        this.duels = [];
    }
}