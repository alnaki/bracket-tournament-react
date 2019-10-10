import { IRound } from "./types";
import * as types from "./types";

export function addRound(round: IRound | undefined) {
  return {
    type: types.ADD_ROUND,
    round: round
  };
}

export function editRound(round: IRound) {
  return {
    type: types.EDIT_ROUND,
    round: round
  };
}

export function deleteRound(id: number) {
  return {
    type: types.DELETE_ROUND,
    id: id
  };
}
