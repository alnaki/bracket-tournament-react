import { Avatar, Divider, Grid, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import React, { Component } from "react";
import { ITeam } from "../../config/model";

type Props = {
  team: ITeam;
  edition?: boolean;
};

const MyAvatar = styled(Avatar)({
  color: "#fff",
  backgroundColor: "#e57373"
});

export default class TeamCard extends Component<Props> {
  static defaultProps = {
    variant: "medium",
    edition: false
  };

  render() {
    return (
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item>
          {this.props.team.avatar ?
            <Avatar src={this.props.team.avatar} />
            :
            <MyAvatar>{this.props.team.name.substr(0, 2)}</MyAvatar>
          }
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item zeroMinWidth>
          <Typography noWrap>{this.props.team.name}</Typography>
        </Grid>
      </Grid>)
  }
}
