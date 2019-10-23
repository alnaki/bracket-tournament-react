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
const Title = styled.h4``;

type Props = {
  bracketState: BracketState;
  name?: string;
  round?: IRound;
  roundId?: number;
  nbDuel?: number;
  firstDuelId?: number;
};
export default class Round extends Component<Props, IRound> {
  static defaultProps = {
    roundId: 1,
    nbDuel: 1,
    firstDuelId: 1
  };
  state = {
    duels: this.props.round
      ? this.props.round.duels
      : Array(this.props.nbDuel).fill({ duels: [] })
  };

  componentDidUpdate(prevProps: any, prevState: { duels: any }) {
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
        <Grid item xs>
          <Title>{this.props.name}</Title>
          {this.state.duels.map((duel, i) => (
            <Duel
              key={i}
              bracketState={this.props.bracketState}
              duel={duel}
              duelId={this.props.firstDuelId! + i}
            />
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
