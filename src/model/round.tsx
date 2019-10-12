import { IDuel } from "./duel";

export interface RoundState {
    rounds: IRound[];
    nbRound: number;
}

export interface IRound {
    id: number;
    idBDD?: number;
    duels: IDuel[];
}