import React, { Component } from "react";
import {
  Avatar,
  CardHeader,
  IconButton,
  Dialog,
  DialogActions,
  Button
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TeamProperties from "./teamComposition";
import { ITeam } from "../../shared/store/team/types";

type Props = {
  team: ITeam;
  variant?: "small" | "medium" | "large";
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
    const avatar = this.props.team.avatar ? (
      <Avatar src={this.props.team.avatar} />
    ) : (
      <MyAvatar>{this.props.team.name.substr(0, 2)}</MyAvatar>
    );
    return (
      <div>
        <CardHeader
          avatar={avatar}
          action={
            <IconButton aria-label="settings" onClick={this.handleClickOpen}>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.team.name}
          subheader=""
        />

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <TeamProperties name={this.props.team.name} />
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
