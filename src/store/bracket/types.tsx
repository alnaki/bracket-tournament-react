import { ITeam } from "../team/types";

// Describing the shape of the chat's slice of state
export interface BracketState {
  id?: number;
  name: string;
  edition: boolean;
  nbTeamMaxByDuel: number;
  nbTeamWinner: number;
  tournament: IRound[];
}

export interface IRound {
  name: string;
  duels: IDuel[];
}

export interface IDuel {
  teams: number[];
}

// Describing the different ACTION NAMES available
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_MODE = "CHANGE_MODE";
export const CHANGE_NB_TEAM_MAX_BY_DUEL = "CHANGE_NB_TEAM_MAX_BY_DUEL";
export const CHANGE_NB_TEAM_WINNER = "CHANGE_NB_TEAM_WINNER";
export const CHANGE_PARAMS = "CHANGE_PARAMS";

interface ChangeName {
  type: typeof CHANGE_NAME;
  value: string;
}

interface ChangeMode {
  type: typeof CHANGE_MODE;
  value: boolean;
}

interface ChangeNbTeamMaxByDuel {
  type: typeof CHANGE_NB_TEAM_MAX_BY_DUEL;
  value: number;
}

interface ChangeNbTeamWinner {
  type: typeof CHANGE_NB_TEAM_WINNER;
  value: number;
}

export type BracketActionTypes =
  | ChangeName
  | ChangeMode
  | ChangeNbTeamMaxByDuel
  | ChangeNbTeamWinner;
