import { IDuel } from "./duel";

export interface IRound {
    id: number;
    idBDD?: number;
    duels: IDuel[];
}