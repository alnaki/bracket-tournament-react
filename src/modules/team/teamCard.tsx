import React, { Component } from "react";
import { Avatar, Grid, Divider, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { ITeam } from "../../store/team/types";

type Props = {
  team: ITeam;
  variant?: "small" | "medium";
  edition?: boolean;
};
type State = {};

const MyAvatar = styled(Avatar)({
  color: "#fff",
  backgroundColor: "#e57373"
});

export default class TeamCard extends Component<Props, State> {
  static defaultProps = {
    variant: "medium",
    edition: false
  };
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    switch (this.props.variant) {
      case "small":
        return (
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item zeroMinWidth>
              <Typography noWrap>{this.props.team.name}</Typography>
            </Grid>
          </Grid>
        );
      case "medium":
        return (
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
              {this.props.team.avatar ? (
                <Avatar src={this.props.team.avatar} />
              ) : (
                <MyAvatar>{this.props.team.name.substr(0, 2)}</MyAvatar>
              )}
            </Grid>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item zeroMinWidth>
              <Typography noWrap>{this.props.team.name}</Typography>
            </Grid>
          </Grid>
        );
    }
  }
}
