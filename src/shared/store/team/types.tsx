import { IPlayer } from "../player/types"

// Describing the shape of the chat's slice of state
export interface ITeam {
    id?: number;
    bracketId: number;
    name: String;
    avatar?: string;
    playerList: IPlayer[];
}

export interface TeamState {
    teamList: IPlayer[];
    nbTeam: number;
}

// Describing the different ACTION NAMES available
export const ADD_TEAM = "ADD_TEAM"
export const EDIT_TEAM = "EDIT_TEAM"
export const DELETE_TEAM = "DELETE_TEAM"
export const ADD_PLAYER_IN_TEAM = "ADD_PLAYER_IN_TEAM"
export const DELETE_PLAYER_IN_TEAM = "DELETE_PLAYER_IN_TEAM"

interface AddTeam {
    type: typeof ADD_TEAM;
    player: ITeam;
}
interface EditTeam {
    type: typeof EDIT_TEAM;
    player: ITeam;
}
interface DeleteTeam {
    type: typeof DELETE_TEAM;
    bracketId: number;
}
interface AddPlayerInTeam {
    type: typeof ADD_PLAYER_IN_TEAM;
    playerId: number;
    bracketId: number;
}
interface DeletePlayerInTeam {
    type: typeof DELETE_PLAYER_IN_TEAM;
    playerId: number;
    bracketId: number;
}

export type TeamActionTypes = AddTeam | EditTeam | DeleteTeam | AddPlayerInTeam | DeletePlayerInTeam;

