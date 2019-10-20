import React, { Component } from "react";
import { Avatar, Grid, Divider, Typography, Card } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { ITeam } from "../../store/team/types";
import Skeleton from '@material-ui/lab/Skeleton';

type Props = {
  team?: ITeam;
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

  teamCardView() {
    switch (this.props.variant) {
      case "small":
        return (
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item zeroMinWidth>
              {this.props.team ?
                <Typography noWrap>{this.props.team.name}</Typography>
                :
                <Skeleton width="70%" />
              }
            </Grid>
          </Grid>
        );
      case "medium":
        return (
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
              {this.props.team ?
                this.props.team.avatar ?
                  <Avatar src={this.props.team.avatar} />
                  :
                  <MyAvatar>{this.props.team.name.substr(0, 2)}</MyAvatar>
                :
                <Skeleton variant="circle" width={40} height={40} />
              }
            </Grid>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            {this.props.team ?
              <Grid item zeroMinWidth>
                <Typography noWrap>{this.props.team.name}</Typography>
              </Grid>
              :
              <Grid item xs>
                <Skeleton width="70%" />
              </Grid>
            }
          </Grid>
        );
    }
  }
  render() {
    if (this.props.team && this.props.edition) {
      return <div style={{ padding: "6px" }}><Card>{this.teamCardView()}</Card></div>
    } else {
      return <div>{this.teamCardView()}</div>
    }
  }
}
