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

  componentDidUpdate(
    prevProps: any,
    prevState: { team: any; score: React.ReactText }
  ) {
    const team = this.props.duelScore
      ? this.props.duelScore.team
      : { id: 0, name: "unknown", playerList: [] };
    const score = this.props.duelScore ? this.props.duelScore.score : "X";
    if (
      JSON.stringify(team) !== JSON.stringify(prevState.team) ||
      score !== prevState.score
    ) {
      this.setState({
        team: team,
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
            edition={this.props.bracketState.edition}
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
