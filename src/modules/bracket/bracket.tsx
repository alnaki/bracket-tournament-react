import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { BracketState } from "../../store/bracket/types";
import BracketRightDrawer from "./bracketRightDrawer";
import BracketLeftDrawer from "./bracketLeftDrawer";
import Round from "../round/round";
import Grid from "@material-ui/core/Grid";

type Props = {
  bracket: BracketState;
};
type State = {
  rounds: Round[];
};
class Bracket extends Component<Props, State> {
  state = {
    rounds: []
  };
  handleInitBracket() {}
  handleInitEmptyBracket() {}
  handleAddDuel() {}

  render() {
    return (
      <BracketRightDrawer>
        <BracketLeftDrawer
          initRounds={this.handleInitBracket.bind(this)}
          edition={this.props.bracket.edition}
        >
          <Grid container>
            {this.state.rounds.map(round => (
              <Grid item xs>
                <h2>Round 1</h2>
                {round}
              </Grid>
            ))}
          </Grid>
        </BracketLeftDrawer>
      </BracketRightDrawer>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bracket: state.bracket
});
export default connect(mapStateToProps)(Bracket);

function nbMinDuelByNbTeam(nbTeam: number, nbTeamMaxByDuel: number): number {
  return Math.ceil(nbTeam / nbTeamMaxByDuel);
}

function initEmptyBracket(nbDuel: number): Round[] {
  let rounds: Round[] = [];

  for (let i = 0; i < nbDuel; i++) {
    rounds.push(new Round({ edition: true }));
  }

  return rounds;
}

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

function initEmptyB4racket(nbFirstDuel: number): IRound[] {
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
