import {
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  ADD_PLAYER_IN_TEAM,
  DELETE_PLAYER_IN_TEAM
} from "./types";
import { ITeam } from "./types";

export function addTeam(team: ITeam) {
  return {
    type: ADD_TEAM,
    team: team
  };
}

export function editTeam(team: ITeam) {
  return {
    type: EDIT_TEAM,
    team: team
  };
}

export function deleteTeam(id: number) {
  return {
    type: DELETE_TEAM,
    id: id
  };
}

export function addPlayerInTeam(idTeam: number, idPlayer: number) {
  return {
    type: ADD_PLAYER_IN_TEAM,
    idTeam: idTeam,
    idPlayer: idPlayer
  };
}

export function deletePlayerInTeam(idTeam: number, idPlayer: number) {
  return {
    type: DELETE_PLAYER_IN_TEAM,
    idTeam: idTeam,
    idPlayer: idPlayer
  };
}
