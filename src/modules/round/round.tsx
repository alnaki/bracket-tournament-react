import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import styled from "styled-components";
import { IDuel, IRound, IBracket } from "../../config/model";
import Duel from "../duel/duel";

const RoundStyle = styled.div`
  min-width: 300px;
`;
const Title = styled.h4``;

type Props = {
  bracketState: IBracket;
  round: IRound;
};
export default class Round extends Component<Props, IRound> {
  static defaultProps = {
    roundId: 1,
  };

  // addDuel(duel: IDuel) {
  //   this.setState({ ...this.state, duels: [...this.state.duels, duel] });
  // }

  // handleAddDuel() {
  //   this.addDuel({ duelsScore: [] });
  // }

  render() {
    return (
      <RoundStyle>
        <Grid item xs>
          <Title>{this.props.round.name}</Title>
          {this.props.round.duelsId.map((duel, i) => (
            <Duel
              key={i}
              bracketState={this.props.bracketState}
            />
          ))}
          {/* {this.props.bracketState.edition && (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleAddDuel}
              fullWidth
            >
              <AddIcon />
            </Button>
          )} */}
        </Grid>
      </RoundStyle>
    );
  }
}