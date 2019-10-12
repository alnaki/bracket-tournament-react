import { IRound } from "./round";

export interface IBracket {
    name: string;
    nbTeamMaxByDuel: number;
    nbTeamWinner: number;
    rounds: IRound[];
}