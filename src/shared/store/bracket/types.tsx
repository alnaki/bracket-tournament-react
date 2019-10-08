// Describing the shape of the chat's slice of state
export interface BracketState {
  id?: number;
  name: string;
  mode: boolean;
  nbPlayerMaxByTeam: number;
  nbTeamWinner: number;
  fontColor: string;
  tournament: [];
}

// Describing the different ACTION NAMES available
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_MODE = "CHANGE_MODE";
export const CHANGE_NB_PLAYER_MAX_BY_TEAM = "CHANGE_NB_PLAYER_MAX_BY_TEAM";
export const CHANGE_NB_TEAM_WINNER = "CHANGE_NB_TEAM_WINNER";
export const CHANGE_FONT_COLOR = "CHANGE_FONT_COLOR";
export const CHANGE_PARAMS = "CHANGE_PARAMS";

interface ChangeName {
  type: typeof CHANGE_NAME;
  value: string;
}

interface ChangeMode {
  type: typeof CHANGE_MODE;
  value: boolean;
}

interface ChangeNbPlayerMaxByTeam {
  type: typeof CHANGE_NB_PLAYER_MAX_BY_TEAM;
  value: number;
}

interface ChangeNbTeamWinner {
  type: typeof CHANGE_NB_TEAM_WINNER;
  value: number;
}

interface ChangeFontColor {
  type: typeof CHANGE_FONT_COLOR;
  value: string;
}

export type BracketActionTypes =
  | ChangeName
  | ChangeMode
  | ChangeNbPlayerMaxByTeam
  | ChangeNbTeamWinner
  | ChangeFontColor;
