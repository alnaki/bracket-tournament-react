import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { BracketState } from "../../store/bracket/types";
import { shuffle } from "../../util/shuffle";
import { IBracket, IRound, IDuel } from "../../config/model";
import Round from "../round/round";
import BracketLeftDrawer from "./bracketLeftDrawer";
import BracketRightDrawer from "./bracketRightDrawer";

type Props = {
  bracketState: BracketState;
  teams: object[];
};
type State = {};
class Bracket extends Component<Props, State & IBracket> {
  state = {
    rounds: []
  };
  handleInitEmptyBracket() {
    let nbTeam = this.props.teams.length;
    let nbDuel = nbMinDuelByNbTeam(
      nbTeam,
      this.props.bracketState.nbTeamMaxByDuel
    );
    let rounds = initEmptyBracket(nbDuel);
    this.setState({ rounds: rounds });
  }
  handleInitTeamBracket() {
    let nbTeam = this.props.teams.length;
    let nbDuel = nbMinDuelByNbTeam(
      nbTeam,
      this.props.bracketState.nbTeamMaxByDuel
    );
    let duels = listFirstDuels(nbDuel, this.props.teams);
    let rounds = initTeamBracket(duels);
    this.setState({ rounds: rounds });
  }
  handleAddDuel() {}

  render() {
    return (
      <BracketRightDrawer>
        <BracketLeftDrawer
          bracketState={this.props.bracketState}
          initTeamBracket={this.handleInitTeamBracket.bind(this)}
        >
          <Grid container>
            {this.state.rounds.map(round => (
              <Round bracketState={this.props.bracketState} />
            ))}
          </Grid>
        </BracketLeftDrawer>
      </BracketRightDrawer>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bracketState: state.bracket,
  teams: state.teams.teams
});
export default connect(mapStateToProps)(Bracket);

/*************
 * Functions *
 *************/

function nbMinDuelByNbTeam(nbTeam: number, nbTeamMaxByDuel: number): number {
  return Math.ceil(nbTeam / nbTeamMaxByDuel);
}

function initEmptyBracket(nbDuel: number) {
  let rounds: IRound[] = [];
  let nbRound = Math.log2(nbDuel);
  for (let i = 0; i < nbRound + 1; i++) {
    for (let j = 0; j < Math.pow(2, i); j++) {
      rounds.push({ duels: [] });
    }
  }
  let nbDuelLast = (nbDuel - Math.pow(2, nbRound)) * 2;
  if (nbDuelLast > 0) {
    rounds.push({ duels: Array(nbDuelLast).fill({ duels: [] }) });
  }
  return rounds;
}

function listFirstDuels(nbDuel: number, teams: object[]) {
  let random = shuffle<object>(teams);
  let firstDuels: IDuel[] = Array(nbDuel).fill({ duelsScore: [] });
  console.log(nbDuel, firstDuels);
  random.forEach((t, i) =>
    firstDuels[i % nbDuel].duelsScore.push({ score: "X", team: t })
  );
  return firstDuels;
}

function initTeamBracket(duels: IDuel[]): IRound[] {
  let rounds: IRound[] = [];
  // if any duels to init
  if (duels.length === 0) {
    rounds.push({ duels: [] });
  } else {
    let nbRound = Math.log2(duels.length);
    // init first empty rounds
    for (let i = 0; i < nbRound; i++) {
      for (let j = 0; j < Math.pow(2, i); j++) {
        rounds.push({ duels: [] });
      }
    }
    // last round is full :)
    if (Math.pow(2, nbRound) === duels.length) {
      rounds.push({ duels: duels });
      // last round is not complete :/
    } else {
      let nbDuelLast = (duels.length - Math.pow(2, nbRound)) * 2;
      let duelLast: IDuel[] = duels.slice(0, nbDuelLast - 1);
      let duelFullInit: IDuel[] = duels.slice(nbDuelLast - 1, duels.length - 1);
      let duelEmptyForFull: IDuel[] = Array(
        Math.pow(2, nbRound) - duelFullInit.length
      ).fill({ duelsScore: [] });

      rounds.push({ duels: [...duelEmptyForFull, ...duelFullInit] });
      rounds.push({ duels: [...duelLast] });
    }
  }
  return rounds;
}
