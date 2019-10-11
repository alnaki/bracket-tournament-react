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

export function addDuelInRound(idRound: number, idDuel: number) {
  return {
    type: types.ADD_DUEL_IN_ROUND,
    idRound: idRound,
    idDuel: idDuel
  };
}

export function editDuelsInRound(idRound: number, duels: number[]) {
  //console.log("tableau", idRound, duels);
  return {
    type: types.EDIT_DUELS_IN_ROUND,
    idRound: idRound,
    duels: duels
  };
}

export function deleteDuelInRound(idRound: number, idDuel: number) {
  return {
    type: types.DELETE_DUEL_IN_ROUND,
    idRound: idRound,
    idDuel: idDuel
  };
}
