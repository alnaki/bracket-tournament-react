import { AppState } from "../store";
import { ITeam } from "../store/team/types";
import { shuffle } from "./shuffle";

export function initBracket(state: AppState): IRound[] {
  // Get all teams & mixed
  let teams = shuffle<ITeam>(state.teams.teams);
  let maxByDuel = state.bracket.nbTeamMaxByDuel;
  let nbDuel = Math.ceil(teams.length / maxByDuel);
  var bracket: IRound[] = [];
  var firstDuels: IDuel[] = [];

  for (let i = 0; i < nbDuel; i++) {
    firstDuels.push(new Duel());
  }

  teams.forEach((t, i) =>
    firstDuels[i % nbDuel].scoring.push(new DuelScoring(t))
  );
  console.log(firstDuels);
  bracket = initEmptyBracket(firstDuels.length);
  console.log(bracket);

  return makeDuelInTournament(bracket, firstDuels);
}

function initEmptyBracket(nbFirstDuel: number): IRound[] {
  let rounds: IRound[] = [];
  for (let i = 1; i ** 2 <= nbFirstDuel; i++) {
    let round: IRound = new Round();
    for (let j = 0; j < i ** 2; j++) {
      round.duels.push(new Duel());
    }
    rounds.push(round);
  }

  return rounds;
}

function makeDuelInTournament(bracket: IRound[], duels: IDuel[]): IRound[] {
  let lastRound = bracket[bracket.length].duels.length;

  for (let i = 0; i < lastRound; i++) {}
  return bracket;
}
