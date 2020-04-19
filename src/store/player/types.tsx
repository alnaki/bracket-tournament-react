import { IPlayer } from "../../config/model"

// Describing the shape of the chat's slice of state
export interface PlayerState {
  playerList: IPlayer[];
  nbPlayer: number;
}


// Describing the different ACTION NAMES available
export const ADD_PLAYER = "ADD_PLAYER";
export const EDIT_PLAYER = "EDIT_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";

interface AddPlayer {
  type: typeof ADD_PLAYER;
  player: IPlayer;
}
interface EditPlayer {
  type: typeof EDIT_PLAYER;
  player: IPlayer;
}
interface DeletePlayer {
  type: typeof DELETE_PLAYER;
  bracketId: number;
}

export type PlayerActionTypes = AddPlayer | EditPlayer | DeletePlayer;
