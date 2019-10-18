import { Card } from "@material-ui/core";
import React, { Component } from "react";
import styled from "styled-components";
import { BracketState } from "../../store/bracket/types";
import { IDuel } from "../../config/model";
import DuelScore from "./duelScore";

const DuelRoot = styled.div`
  max-width: 275px;
  margin-bottom: 10px;
`;

type Props = {
  bracketState: BracketState;
  duel?: IDuel;
};
export default class Duel extends Component<Props, IDuel> {
  state = {
    duelsScore: this.props.duel ? this.props.duel.duelsScore : []
  };

  componentDidUpdate(prevProps, prevState) {
    const duelsScore = this.props.duel ? this.props.duel.duelsScore : [];
    console.log(
      duelsScore,
      prevState.duelsScore,
      JSON.stringify(duelsScore) !== JSON.stringify(prevState.duelsScore)
    );
    if (JSON.stringify(duelsScore) !== JSON.stringify(prevState.duelsScore)) {
      this.setState({
        duelsScore: duelsScore
      });
    }
  }

  render() {
    return (
      <DuelRoot>
        Duel
        {this.state.duelsScore.map((score, i) => (
          <DuelScore
            key={i}
            bracketState={this.props.bracketState}
            duelScore={score}
          />
        ))}
        <Card />
      </DuelRoot>
    );
  }
}
