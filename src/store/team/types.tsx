// Describing the shape of the chat's slice of state
export interface TeamState {
  teams: ITeam[];
  nbTeam: number;
}

export interface ITeam {
  id: string;
  idBDD?: number;
  name: string;
  avatar?: string;
  playerList: number[];
}

// Describing the different ACTION NAMES available
export const ADD_TEAM = "ADD_TEAM";
export const EDIT_TEAM = "EDIT_TEAM";
export const DELETE_TEAM = "DELETE_TEAM";
export const INIT_N_TEAM = "INIT_N_TEAM";
export const ADD_PLAYER_IN_TEAM = "ADD_PLAYER_IN_TEAM";
export const DELETE_PLAYER_IN_TEAM = "DELETE_PLAYER_IN_TEAM";

interface AddTeam {
  type: typeof ADD_TEAM;
  team?: ITeam;
}
interface EditTeam {
  type: typeof EDIT_TEAM;
  team: ITeam;
}
interface DeleteTeam {
  type: typeof DELETE_TEAM;
  bracketId: string;
}
interface InitNumberTeam {
  type: typeof INIT_N_TEAM;
  nbTeam: number;
}
interface AddPlayerInTeam {
  type: typeof ADD_PLAYER_IN_TEAM;
  playerId: number;
  teamId: string;
}
interface DeletePlayerInTeam {
  type: typeof DELETE_PLAYER_IN_TEAM;
  playerId: number;
  teamId: string;
}

export type TeamActionTypes =
  | AddTeam
  | EditTeam
  | DeleteTeam
  | InitNumberTeam
  | AddPlayerInTeam
  | DeletePlayerInTeam;
