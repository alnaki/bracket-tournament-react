import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { IDuelScore } from "../../config/model";
import { BracketState } from "../../store/bracket/types";
import TeamCard from "../team/teamCard";

type Props = {
  bracketState: BracketState;
  duelScore?: IDuelScore;
};
export default class DuelScore extends Component<Props, IDuelScore> {
  state = {
    team: this.props.duelScore
      ? this.props.duelScore.team
      : { id: 0, name: "unknown", playerList: [] },
    score: this.props.duelScore ? this.props.duelScore.score : "X"
  };
  render() {
    return (
      <Grid container>
        score
        <Grid item>
          <TeamCard team={this.state.team} />
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>{this.state.score}</Grid>
      </Grid>
    );
  }
}
