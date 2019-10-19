import { Card } from "@material-ui/core";
import React, { Component } from "react";
import { BracketState } from "../../store/bracket/types";
import { IDuel } from "../../config/model";
import DuelScore from "./duelScore";

type Props = {
  bracketState: BracketState;
  duel?: IDuel;
};
export default class Duel extends Component<Props, IDuel> {
  state = {
    duelsScore: this.props.duel ? this.props.duel.duelsScore : []
  };

  componentDidUpdate(prevProps: any, prevState: { duelsScore: any; }) {
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
      <Card>
        {this.state.duelsScore.map((score, i) => (
          <DuelScore
            key={i}
            bracketState={this.props.bracketState}
            duelScore={score}
          />
        ))}
      </Card>
    );
  }
}
