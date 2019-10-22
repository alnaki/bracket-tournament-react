import { Card } from "@material-ui/core";
import React, { Component } from "react";
import { IDuel } from "../../config/model";
import { BracketState } from "../../store/bracket/types";
import TeamCard from "../team/teamCard";
import DuelScore from "./duelScore";
// import { Droppable } from "react-beautiful-dnd";

type Props = {
  bracketState: BracketState;
  duel?: IDuel;
  duelId?: number;
};
export default class Duel extends Component<Props, IDuel> {
  static defaultProps = {
    duelId: 1
  };
  state = {
    duelsScore: this.props.duel ? this.props.duel.duelsScore : []
  };

  nbSkeletonInEdition(): number {
    return (
      this.props.bracketState.nbTeamMaxByDuel - this.state.duelsScore.length
    );
  }

  componentDidUpdate(prevProps: any, prevState: { duelsScore: any }) {
    const duelsScore = this.props.duel ? this.props.duel.duelsScore : [];
    if (JSON.stringify(duelsScore) !== JSON.stringify(prevState.duelsScore)) {
      this.setState({
        duelsScore: duelsScore
      });
    }
  }

  render() {
    return (
      // <Droppable droppableId={this.props.}>
      <Card>
        <h5>{this.props.duelId}</h5>
        {this.state.duelsScore.map((score, i) => (
          <DuelScore
            key={i}
            bracketState={this.props.bracketState}
            duelScore={score}
          />
        ))}
        {this.props.bracketState.edition &&
          Array(this.nbSkeletonInEdition()).fill(<TeamCard edition={true} />)}
      </Card>
      // </Droppable>
    );
  }
}
