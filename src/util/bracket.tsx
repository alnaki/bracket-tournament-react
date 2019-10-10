import { ITeam } from "../store/team/types";

export function initRandomOppositions(
  teams: ITeam[],
  nbTeamMaxByDuel: number
): ITeam[][] {
  let nbDuel = Math.ceil(teams.length / nbTeamMaxByDuel);
  let randomTeams = shuffleArray(teams);
  let duels: ITeam[][];

  for (var i = 0; i < nbDuel; i++) {
    duels[i] = [];
  }

  randomTeams.map((t, i) => duels[i % nbDuel].push(t));

  return duels;
}

export function initRandomTournament(teams: ITeam[], nbTeamMaxByDuel: number) {
  let duels = initRandomOppositions(teams, nbTeamMaxByDuel);

  let rounds;

  return duels;
}

function shuffleArray(array: ITeam[]): ITeam[] {
  let rand;
  for (let i = array.length - 1; i > 0; i--) {
    rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }
  return rand;
}
