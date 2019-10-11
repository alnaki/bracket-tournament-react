// Describing the shape of the chat's slice of state
export interface RoundState {
  rounds: IRound[];
  nbRound: number;
}

export interface IRound {
  id: number;
  idBDD?: number;
  duels: IDuel[];
}

export interface IDuel {
  idBDD?: number;
  pos: number;
  teams: ITeamScoring[];
}

export interface ITeamScoring {
  idTeam: number;
  winner: "noplay" | "true" | "false";
  score?: number;
}

// Describing the different ACTION NAMES available
export const ADD_ROUND = "ADD_ROUND";
export const EDIT_ROUND = "EDIT_ROUND";
export const DELETE_ROUND = "DELETE_ROUND";
export const ADD_DUEL_IN_ROUND = "ADD_DUEL_IN_ROUND";
export const EDIT_DUELS_IN_ROUND = "EDIT_DUELS_IN_ROUND";
export const DELETE_DUEL_IN_ROUND = "DELETE_DUEL_IN_ROUND";

interface AddRound {
  type: typeof ADD_ROUND;
  round?: IRound;
}
interface EditRound {
  type: typeof EDIT_ROUND;
  round: IRound;
}
interface DeleteRound {
  type: typeof DELETE_ROUND;
  id: number;
}
interface AddDuelInRound {
  type: typeof ADD_DUEL_IN_ROUND;
  idRound: number;
  idDuel: number;
}
interface EditDuelsInRound {
  type: typeof EDIT_DUELS_IN_ROUND;
  idRound: number;
  duels: number[];
}
interface DeleteDuelInRound {
  type: typeof DELETE_DUEL_IN_ROUND;
  idRound: number;
  idDuel: number;
}

export type RoundActionTypes =
  | AddRound
  | EditRound
  | DeleteRound
  | AddDuelInRound
  | EditDuelsInRound
  | DeleteDuelInRound;
