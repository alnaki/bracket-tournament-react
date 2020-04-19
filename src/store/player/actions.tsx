import { ADD_PLAYER, EDIT_PLAYER, DELETE_PLAYER } from "./types";
import { IPlayer } from "../../config/model";

export function addPlayer(player: IPlayer) {
  return {
    type: ADD_PLAYER,
    player: player
  };
}

export function editPlayer(player: IPlayer) {
  return {
    type: EDIT_PLAYER,
    player: player
  };
}

export function deletePlayer(id: number) {
  return {
    type: DELETE_PLAYER,
    id: id
  };
}
