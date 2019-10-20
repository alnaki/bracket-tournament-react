import { Card } from "@material-ui/core";
import React, { Component } from "react";
import { BracketState } from "../../store/bracket/types";
import { IDuel } from "../../config/model";
import DuelScore from "./duelScore";
import TeamCard from "../team/teamCard";

type Props = {
  bracketState: BracketState;
  duel?: IDuel;
};
export default class Duel extends Component<Props, IDuel> {
  state = {
    duelsScore: this.props.duel ? this.props.duel.duelsScore : []
  };

  nbSkeletonInEdition(): number {
    return this.props.bracketState.nbTeamMaxByDuel - this.state.duelsScore.length;
  }

  componentDidUpdate(prevProps: any, prevState: { duelsScore: any; }) {
    const duelsScore = this.props.duel ? this.props.duel.duelsScore : [];
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
        {this.props.bracketState.edition && Array(this.nbSkeletonInEdition()).fill(<TeamCard edition={true}></TeamCard>)}
      </Card>
    );
  }
}
