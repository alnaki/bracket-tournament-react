import * as types from "./types";
import { ITeam } from "../../config/model";

export function addTeam(team: ITeam | undefined) {
  return {
    type: types.ADD_TEAM,
    team: team
  };
}

export function editTeam(team: ITeam) {
  return {
    type: types.EDIT_TEAM,
    team: team
  };
}

export function deleteTeam(id: number) {
  return {
    type: types.DELETE_TEAM,
    id: id
  };
}

export function initNumberTeam(nbTeam: number) {
  return {
    type: types.INIT_N_TEAM,
    nbTeam: nbTeam
  }
}

export function addPlayerInTeam(idTeam: number, idPlayer: number) {
  return {
    type: types.ADD_PLAYER_IN_TEAM,
    idTeam: idTeam,
    idPlayer: idPlayer
  };
}

export function deletePlayerInTeam(idTeam: number, idPlayer: number) {
  return {
    type: types.DELETE_PLAYER_IN_TEAM,
    idTeam: idTeam,
    idPlayer: idPlayer
  };
}

export function changeTeamList(teams: ITeam[]) {
  return {
    type: types,
    teams: teams
  }
}


