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
import { ITeam } from "../../store/team/types";
import TeamForm from "./teamForm";

type Props = {
  team: ITeam;
  variant: "small" | "medium";
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
          <CardHeader
            title={this.props.team.name}
            action={2}
            disableTypography
          />
        );
      case "medium":
        return (
          <div>
            <CardHeader
              avatar={
                this.props.team.avatar ? (
                  <Avatar src={this.props.team.avatar} />
                ) : (
                  <MyAvatar>{this.props.team.name.substr(0, 2)}</MyAvatar>
                )
              }
              action={
                <IconButton
                  aria-label="settings"
                  onClick={this.handleClickOpen}
                >
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
              <TeamForm name={this.props.team.name} />
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
}
