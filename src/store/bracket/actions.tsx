import * as types from "./types";

export function changeName(value: string) {
  return {
    type: types.CHANGE_MODE,
    value: value
  };
}

export function changeMode(value: boolean) {
  return {
    type: types.CHANGE_MODE,
    value: value
  };
}

export function changeNbPlayerMaxByTeam(value: number) {
  return {
    type: types.CHANGE_MODE,
    value: value
  };
}

export function changeNbTeamWinner(value: number) {
  return {
    type: types.CHANGE_MODE,
    value: value
  };
}

export function changeFontColor(value: string) {
  return {
    type: types.CHANGE_MODE,
    value: value
  };
}
