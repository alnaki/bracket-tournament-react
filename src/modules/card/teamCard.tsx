import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { Avatar, CardHeader, IconButton } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

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
      <MyAvatar>{this.props.name.substr(0, 1)}</MyAvatar>
    );
    return (
      <Card>
        <CardHeader
          avatar={avatar}
          action={<IconButton />}
          title={this.props.name}
          subheader=""
        />
      </Card>
    );
  }
}
