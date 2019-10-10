export function initBracket() {
  // Get all teams
  // Mixed teams
  // Split by duels
  // Move duels in rounds
}

export function initRandomOppositions(
  teams: number[],
  nbTeamMaxByDuel: number
): number[][] {
  let nbDuel = Math.ceil(teams.length / nbTeamMaxByDuel);
  let randomTeams = shuffle(teams);
  let duels: number[][] = [];

  for (var i = 0; i < nbDuel; i++) {
    duels.push([]);
  }

  randomTeams.map((t, i) => duels[i % nbDuel].push(t));

  return duels;
}

export function initRandomTournament(teams: number[], nbTeamMaxByDuel: number) {
  let duels = initRandomOppositions(teams, nbTeamMaxByDuel);

  let rounds;

  return duels;
}

function shuffle(array: number[]): number[] {
  let copy = array;
  return copy.sort(() => Math.random() - 0.5);
}
