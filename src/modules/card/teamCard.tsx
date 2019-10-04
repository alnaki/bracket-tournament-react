import React, { Component } from "react";
import { Avatar, CardHeader, IconButton } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";

type Props = {
  name: string;
  avatar?: string;
};
type State = {};

const MyAvatar = styled(Avatar)({
  color: "#fff",
  backgroundColor: "#e57373"
});

export default class TeamCard extends Component<Props, State> {
  render() {
    const avatar = this.props.avatar ? (
      <Avatar src={this.props.avatar} />
    ) : (
      <MyAvatar>{this.props.name.substr(0, 2)}</MyAvatar>
    );
    return (
      <CardHeader
        avatar={avatar}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={this.props.name}
        subheader=""
      />
    );
  }
}
