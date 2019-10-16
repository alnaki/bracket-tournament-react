import { ITeam } from "../store/team/types";

export interface IBracket {
  rounds: IRound[];
}

export interface IRound {
  duels: IDuel[];
}

export interface IDuel {
  duelsScore: IDuelScore[];
}

/**
 * V: victory
 * D: defeat
 * X: no play
 */
export interface IDuelScore {
  team: ITeam;
  score: number | "V" | "D" | "X";
}
