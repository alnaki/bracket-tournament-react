import * as types from "./types";

export function changeName(value: string) {
  return {
    type: types.CHANGE_NAME,
    value: value
  };
}

export function changeMode(value: boolean) {
  return {
    type: types.CHANGE_MODE,
    value: value
  };
}

export function changeNbTeamMaxByDuel(value: number) {
  return {
    type: types.CHANGE_NB_TEAM_MAX_BY_DUEL,
    value: value
  };
}

export function changeNbTeamWinner(value: number) {
  return {
    type: types.CHANGE_NB_TEAM_WINNER,
    value: value
  };
}
