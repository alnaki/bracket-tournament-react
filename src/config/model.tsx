// Etat du tournoi
export interface IBracket {
  id: string;
  name: string;
  editionMode: boolean;
  rounds: IRound[];
  teamIds: string[];

  nbRoundMax: number; // 0 > infini
  nbTeamMaxByDuel: number;
  nbTeamWinner: number;
}

// belongs to the bracket
export interface IRound {
  id: string;
  name: string;
  roundNumber: number;
  duelsId: string[];
}

export interface IDuel {
  id: string;
  duelsScore: IScore[];
}

/**
 * Number: Score
 * -1: Unplay
 */
export interface IScore {
  idTeam: string;
  score: number;
}

export interface ITeam {
  id: string;
  name: string;
  avatar?: string;
  playersId: string[];
}

export interface IPlayer {
  id: number;
  idBDD?: number;
  name: String;
  avatar?: string;
}