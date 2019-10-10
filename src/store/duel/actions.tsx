import * as types from "./types";
import { IDuel, ITeamScoring } from "./types";

export function addDuel(duel: IDuel | undefined) {
  return {
    type: types.ADD_DUEL,
    duel: duel
  };
}

export function editDuel(duel: IDuel) {
  return {
    type: types.EDIT_DUEL,
    duel: duel
  };
}

export function deleteDuel(id: number) {
  return {
    type: types.DELETE_DUEL,
    id: id
  };
}

export function editDuelTeams(id: number, teams: ITeamScoring[]) {
  return {
    type: types.EDIT_DUEL_TEAMS,
    id: id,
    teams: teams
  };
}
