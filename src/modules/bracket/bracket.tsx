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
  initRounds(rounds: Round[]) {
    this.setState({ rounds: rounds });
  }
  initEmptyRounds(nbFirstDuel: number) {}
  addDuel() {}

  render() {
    return (
      <BracketRightDrawer>
        <BracketLeftDrawer
          initRounds={this.initRounds.bind(this)}
          edition={this.props.bracket.edition}
        >
          <Grid container>
            {this.state.rounds.map(round => (
              <Grid item xs>
                <h2>Round 1</h2>
                <Round
                  duels={round.duels}
                  edition={this.props.bracket.edition}
                />
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
