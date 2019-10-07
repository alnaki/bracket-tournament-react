// Describing the shape of the chat's slice of state
export interface IPlayer {
    id?: number;
    bracketId: number;
    name: String;
    avatar?: string;
}

export interface PlayerState {
    playerList: IPlayer[];
    nbPlayer: number;
}

// Describing the different ACTION NAMES available
export const GET_PLAYER = "GET_PLAYER"
export const CREATE_PLAYER = "CREATE_PLAYER"
export const MODIFY_PLAYER = "MODIFY_PLAYER"
export const DELETE_PLAYER = "DELETE_PLAYER"

interface GetPlayer {
    type: typeof GET_PLAYER;
    bracketId: number;
}
interface CreatePlayer {
    type: typeof CREATE_PLAYER;
    player: IPlayer;
}
interface ModifyPlayer {
    type: typeof MODIFY_PLAYER;
    player: IPlayer;
}
interface DeletePlayer {
    type: typeof DELETE_PLAYER;
    bracketId: number;
}

export type PlayerActionTypes = GetPlayer | CreatePlayer | ModifyPlayer | DeletePlayer;

