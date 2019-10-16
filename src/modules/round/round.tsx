import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { BracketState } from "../../store/bracket/types";
import { IRound, IDuel } from "../../config/model";
import Duel from "../duel/duel";

type Props = {
  bracketState: BracketState;
  duels?: IDuel[];
  nbDuel?: number;
};
type State = {};
export default class Round extends Component<Props, State & IRound> {
  static defaultProps = {
    nbDuel: 1
  };
  state = {
    duels: this.props.duels
      ? this.props.duels
      : Array(this.props.nbDuel).fill({ duelsScore: [] })
  };

  addDuel(duel: IDuel) {
    this.setState({ ...this.state, duels: [...this.state.duels, duel] });
  }

  handleAddDuel() {
    this.addDuel({ duelsScore: [] });
  }

  render() {
    return (
      <Grid item xs className="bracket-column">
        <h4>Round 1</h4>
        {this.state.duels.map(duel => (
          <Duel bracketState={this.props.bracketState} duel={duel} />
        ))}
        {this.props.bracketState.edition && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleAddDuel}
            fullWidth
          >
            <AddIcon />
          </Button>
        )}
      </Grid>
    );
  }
}
