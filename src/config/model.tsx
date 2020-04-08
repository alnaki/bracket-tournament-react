export interface IBracket {
  id: string;
  name: string;
  editionMode: boolean;
  nbTeamMaxByDuel: number;
  nbTeamWinner: number;
  rounds: IRound[];
}

export interface IRound {
  id: string;
  name: string;
  roundNumber: number;
  duelsId: string[];
}

export interface IDuel {
  id: string;
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

export interface ITeam {
  id: string;
  name: string;
  avatar?: string;
  playersId: string[];
}