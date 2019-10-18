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
import { ITeam } from "../../store/team/types";

type Props = {
  bracketState: BracketState;
  teams: ITeam[];
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
            {this.state.rounds.map((round, i) => (
              <Round
                key={i}
                bracketState={this.props.bracketState}
                round={round}
              />
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

function nbMinRound(nbDuel: number) {
  let nbRound = Math.ceil(Math.log2(nbDuel));
  console.log("nbDuel", nbDuel, "nbRound", nbRound);
  return nbRound;
}

function initEmptyBracket(nbDuel: number) {
  let rounds: IRound[] = [];
  let nbRound = nbMinRound(nbDuel);
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

function listFirstDuels(nbDuel: number, teams: ITeam[]) {
  let random = shuffle<ITeam>(teams);
  let firstDuels: IDuel[] = [];
  for (let i = 0; i < nbDuel; i++) {
    firstDuels.push({ duelsScore: [] });
  }
  random.forEach((t, i) =>
    firstDuels[i % nbDuel].duelsScore.push({ score: "X", team: t })
  );
  return firstDuels;
}

function initTeamBracket(duels: IDuel[]): IRound[] {
  let rounds: IRound[] = [];
  console.log("hello", duels);
  // if any duels to init
  if (duels.length === 0) {
    rounds.push({ duels: [] });
    return rounds;
  }

  let nbRound = nbMinRound(duels.length);
  // init first empty rounds
  for (let i = 0; i < nbRound; i++) {
    let duelRound: IRound = { duels: [] };
    for (let j = 0; j < Math.pow(2, i); j++) {
      duelRound.duels.push({ duelsScore: [] });
    }
    rounds.push(duelRound);
  }
  console.log("rounds empty", rounds);
  // last round is full :)
  if (Math.pow(2, nbRound) === duels.length) {
    rounds.push({ duels: duels });
    // last round is not complete :/
  } else {
    let nbDuelLast = (duels.length - Math.pow(2, nbRound - 1)) * 2;
    let duelLast: IDuel[] = duels.slice(0, nbDuelLast - 1);
    let duelFullInit: IDuel[] = duels.slice(nbDuelLast - 1, duels.length - 1);
    let duelEmptyForFull: IDuel[] = Array(
      Math.pow(2, nbRound - 1) - duelFullInit.length
    ).fill({ duelsScore: [] });
    console.log("nbDuelLast", nbDuelLast);
    console.log("duelLast", duelLast);
    console.log("duelFullInit", duelFullInit);
    console.log("duelEmptyForFull", duelEmptyForFull);
    rounds.pop();
    rounds.push({ duels: [...duelEmptyForFull, ...duelFullInit] });
    rounds.push({ duels: [...duelLast] });
  }

  console.log("RESULT", rounds);
  return rounds;
}
