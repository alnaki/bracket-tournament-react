import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { ITeam } from "../../config/model";
import TeamCard from "../team/teamCard";

type Props = {
    team: ITeam,
    score: number
};
export default class TeamCardWithScore extends Component<Props> {

  render() {
    return (
      <Grid container>
        <Grid item xs={10}>
          <TeamCard
            team={this.props.team}
          />
        </Grid>
        <Grid item xs={1}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={1}>
          {this.props.score}
        </Grid>
      </Grid>
    );
  }
}
