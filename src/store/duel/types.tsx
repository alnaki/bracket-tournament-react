// Describing the shape of the chat's slice of state
export interface DuelState {
  duels: IDuel[];
  nbDuel: number;
}

export interface IDuel {
  id: number;
  idBDD?: number;
  teams: ITeamScoring[];
}

export interface ITeamScoring {
  idTeam: number;
  winner: "noplay" | "true" | "false";
  score?: number;
}

// Describing the different ACTION NAMES available
export const ADD_DUEL = "ADD_DUEL";
export const EDIT_DUEL = "EDIT_DUEL";
export const DELETE_DUEL = "DELETE_DUEL";
export const EDIT_DUEL_TEAMS = "EDIT_DUEL_TEAMS";

interface AddDuel {
  type: typeof ADD_DUEL;
  duel: IDuel;
}
interface EditDuel {
  type: typeof EDIT_DUEL;
  duel: IDuel;
}
interface DeleteDuel {
  type: typeof DELETE_DUEL;
  id: number;
}
interface EditDuelTeams {
  type: typeof EDIT_DUEL_TEAMS;
  id: number;
  teams: ITeamScoring[];
}

export type DuelActionTypes = AddDuel | EditDuel | DeleteDuel | EditDuelTeams;
