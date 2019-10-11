import { AppState } from "../store";
import { ITeam } from "../store/team/types";
import { editDuelsInRound } from "../store/round/actions";

export function initBracket(state: AppState): number[][] {
  // Get all teams & mixed
  let teams = shuffle(state.teams.teams);
  let maxByDuel = state.bracket.nbTeamMaxByDuel;
  let nbDuel = Math.ceil(teams.length / maxByDuel);
  let rounds: number[][] = [];
  // Split by duels
  for (var i = 0; i < nbDuel; i++) {
    rounds.push([]);
  }
  teams.map((t, i) => rounds[i % nbDuel].push(t.id));
  // Move duels in rounds states

  return rounds;

  // console.log(state.round);
}

export function shuffle(array: ITeam[]): ITeam[] {
  let copy = array;
  return copy.sort(() => Math.random() - 0.5);
}
