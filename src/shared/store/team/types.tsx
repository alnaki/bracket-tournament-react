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
export const GET_TEAM = "GET_TEAM"
export const CREATE_TEAM = "CREATE_TEAM"
export const MODIFY_TEAM = "MODIFY_TEAM"
export const DELETE_TEAM = "DELETE_TEAM"
export const ADD_PLAYER_IN_TEAM = "ADD_PLAYER_IN_TEAM"
export const REMOVE_PLAYER_IN_TEAM = "REMOVE_PLAYER_IN_TEAM"

interface GetTeam {
    type: typeof GET_TEAM;
    bracketId: number;
}
interface CreateTeam {
    type: typeof CREATE_TEAM;
    player: IPlayer;
}
interface ModifyTeam {
    type: typeof MODIFY_TEAM;
    player: IPlayer;
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
interface RemovePlayerInTeam {
    type: typeof REMOVE_PLAYER_IN_TEAM;
    playerId: number;
    bracketId: number;
}

export type TeamActionTypes = GetTeam | CreateTeam | ModifyTeam | DeleteTeam | AddPlayerInTeam | RemovePlayerInTeam;

