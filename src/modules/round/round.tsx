import React, { Component } from "react";
import styled from "styled-components";
import { IBracket, IRound } from "../../config/model";
import RoundList from "./roundList";
import RoundTitle from "./roundTitle";

const RoundStyle = styled.div`
  min-width: 50px;
  max-width: 300px;
`;

type Props = {
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
        <RoundTitle round={this.props.round}></RoundTitle>
        <RoundList round={this.props.round}></RoundList>
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
      </RoundStyle>
    );
  }
}