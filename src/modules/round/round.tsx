import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { BracketState } from "../../store/bracket/types";
import { IRound, IDuel } from "../../config/model";
import Duel from "../duel/duel";

type Props = {
  bracketState: BracketState;
  round?: IRound;
  nbDuel?: number;
};
export default class Round extends Component<Props, IRound> {
  static defaultProps = {
    nbDuel: 1
  };
  state = {
    duels: this.props.round
      ? this.props.round.duels
      : Array(this.props.nbDuel).fill({ duels: [] })
  };

  componentDidUpdate(prevProps, prevState) {
    // Utilisation classique (pensez bien à comparer les props) :
    const duels = this.props.round
      ? this.props.round.duels
      : Array(this.props.nbDuel).fill({ duels: [] });
    console.log("maj du composant", duels, prevState.duels);
    if (JSON.stringify(duels) !== JSON.stringify(prevState.duels)) {
      this.setState({
        duels: duels
      });
    }
  }

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
        {this.state.duels.map((duel, i) => (
          <Duel key={i} bracketState={this.props.bracketState} duel={duel} />
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
