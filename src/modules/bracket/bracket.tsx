import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { BracketState } from "../../store/bracket/types";
import BracketRightDrawer from "./bracketRightDrawer";
import BracketLeftDrawer from "./bracketLeftDrawer";
import Round from "../round/round";
import Grid from "@material-ui/core/Grid";
import { shuffle } from "../../util/shuffle";
import Duel from "../duel/duel";

type Props = {
  bracket: BracketState;
};
type State = {
  rounds: Round[];
};
class Bracket extends Component<Props, State> {
  state = {
    rounds: [new Round({ edition: this.props.bracket.edition, nbDuel: 1 })]
  };


  initListFirstDuels(nbDuel: number, teams: object[]): Duel[] {
    let random = shuffle<object>(teams);
    let firstDuels: Duel[] = []

    for (let i = 0; i < nbDuel; i++) {
      firstDuels.push(
        new Duel({
          edition: this.props.bracket.edition,
          nbTeamMaxByDuel: this.props.bracket.nbTeamMaxByDuel
        }));
    }
    random.forEach((t, i) =>
      firstDuels[i % nbDuel].addTeam(""))

    return firstDuels;
  }

  makeDuelInTournament(duels: Duel[]) {
    // todo a faire
    let nbRound = 1;
    while (nbRound ** 2 <= duels.length) {
      nbRound++;
    }

    if (nbRound ** 2 === duels.length) {
      this.state.rounds[nbRound].state.duels = duels;
    } else {
      for (let i = 0; i < (nbRound - 1) ** 2; i++) {
        let d = duels.pop();
        if (d) this.state.rounds[nbRound - 1].state.duels.push(d)
      }
      this.state.rounds[nbRound].state.duels
    }
  }

  handleInitBracket() { }
  handleInitEmptyBracket() { }
  handleAddDuel() { }


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
  bracket: state.bracket,
});
export default connect(mapStateToProps)(Bracket);

/*************
 * Functions *
 *************/

function nbMinDuelByNbTeam(nbTeam: number, nbTeamMaxByDuel: number): number {
  return Math.ceil(nbTeam / nbTeamMaxByDuel);
}

function initEmptyBracket(nbDuel: number): Round[] {
  let rounds: Round[] = [];
  for (let i = 1; (i ** 2) <= nbDuel; i++) {
    rounds.push(new Round({ edition: true, nbDuel: i ** 2 }));
  }
  return rounds;
}

