import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { AppState } from "../../store";
import { BracketState } from "../../store/bracket/types";
import BracketRightDrawer from "./bracketRightDrawer";
import BracketLeftDrawer from "./bracketLeftDrawer";
import RoundList from "../round/roundList";
import { IRound } from "../../model/round";

type Props = {
  bracket: BracketState;
};
type State = {
  rounds: IRound[];
};
class Bracket extends Component<Props, State> {
  state = {
    rounds: []
  }
  initRounds(rounds: IRound[]) {
    this.setState({ rounds: rounds });
  }

  render() {
    return (
      <div>
        <BracketLeftDrawer initRounds={this.initRounds.bind(this)} edition={this.props.bracket.edition} />
        <BracketRightDrawer />
        <Grid container>
          <RoundList rounds={this.state.rounds} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bracket: state.bracket,
});
export default connect(mapStateToProps)(Bracket);
