import { AppState } from "../store";
import { ITeam } from "../store/team/types";
import { IRound, Round } from "../model/round";
import { Duel } from "../model/duel";

export function initBracket(state: AppState): IRound[] {
  // Get all teams & mixed
  let teams = shuffle(state.teams.teams);
  let maxByDuel = state.bracket.nbTeamMaxByDuel;
  let nbDuel = Math.ceil(teams.length / maxByDuel);
  var rounds: IRound[] = [];

  for (let i = 0; i < nbDuel; i++) {
    rounds.push(new Round())
  }

  // Split by duels
  teams.forEach((t, i) => (rounds[i % nbDuel].duels.push(new Duel(t))));
  // Move duels in rounds states

  return rounds;

  // console.log(state.round);
}

export function shuffle(array: ITeam[]): ITeam[] {
  let copy = array;
  return copy.sort(() => Math.random() - 0.5);
}
