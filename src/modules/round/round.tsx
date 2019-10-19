import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import styled from "styled-components";
import { IDuel, IRound } from "../../config/model";
import { BracketState } from "../../store/bracket/types";
import Duel from "../duel/duel";

const RoundStyle = styled.div`
min-width: 300px;
`;

type Props = {
  bracketState: BracketState;
  name?: string;
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

  componentDidUpdate(prevProps: any, prevState: { duels: any; }) {
    // Utilisation classique (pensez bien à comparer les props) :
    const duels = this.props.round
      ? this.props.round.duels
      : Array(this.props.nbDuel).fill({ duels: [] });
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
      <RoundStyle>
        <Grid item xs className="bracket-column">
          <h4>{this.props.name}</h4>
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
      </RoundStyle>
    );
  }
}
