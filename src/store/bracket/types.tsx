import { IRound } from "../../config/model";

// Describing the different ACTION NAMES available
export const RESET_BRACKET = "RESET_BRACKET"
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_MODE = "CHANGE_MODE";
export const CHANGE_NB_TEAM_MAX_BY_DUEL = "CHANGE_NB_TEAM_MAX_BY_DUEL";
export const CHANGE_NB_TEAM_WINNER = "CHANGE_NB_TEAM_WINNER";
export const CHANGE_NB_ROUND_MAX = "CHANGE_NB_ROUND_MAX";
export const CHANGE_ROUNDS = "CHANGE_ROUNDS";
export const CHANGE_TEAM_IDS = "CHANGE_TEAM_IDS";

interface ResetBracket {
  type: typeof RESET_BRACKET;
}

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

interface ChangeNbRoundMax {
  type: typeof CHANGE_NB_ROUND_MAX;
  value: number;
}

interface ChangeRounds {
  type: typeof CHANGE_ROUNDS;
  value: IRound[];
}

interface ChangeTeamIds {
  type: typeof CHANGE_TEAM_IDS;
  value: string[];
}

export type BracketActionTypes =
  | ResetBracket
  | ChangeName
  | ChangeMode
  | ChangeNbTeamMaxByDuel
  | ChangeNbTeamWinner
  | ChangeNbRoundMax
  | ChangeRounds
  | ChangeTeamIds;
