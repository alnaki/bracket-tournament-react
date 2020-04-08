import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { IDuelScore } from "../../config/model";
import { IBracket } from "../../config/model";
import TeamCard from "../team/teamCard";
import uuid from "uuid/v4";

type Props = {
  bracketState: IBracket;
  duelScore?: IDuelScore;
};
export default class DuelScore extends Component<Props, IDuelScore> {

  componentDidUpdate(
    prevProps: any,
    prevState: { team: any; score: React.ReactText }
  ) {
    const team = this.props.duelScore
      ? this.props.duelScore.team
      : { id: uuid(), name: "unknown", playerList: [] };
    const score = this.props.duelScore ? this.props.duelScore.score : "X";
    if (
      JSON.stringify(team) !== JSON.stringify(prevState.team) ||
      score !== prevState.score
    ) {
      this.setState({
        score: score
      });
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={11} sm>
          <TeamCard
            team={this.state.team}
            edition={this.props.bracketState.editionMode}
          />
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={1}>
          {this.state.score}
        </Grid>
      </Grid>
    );
  }
}
