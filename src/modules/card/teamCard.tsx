import React, { Component } from "react";
import {
  Avatar,
  CardHeader,
  IconButton,
  Popper,
  Fade,
  Paper,
  Typography
} from "@material-ui/core";
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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    const avatar = this.props.avatar ? (
      <Avatar src={this.props.avatar} />
    ) : (
      <MyAvatar>{this.props.name.substr(0, 2)}</MyAvatar>
    );
    return (
      <div>
        <CardHeader
          avatar={avatar}
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.name}
          subheader=""
        />
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography>The content of the Popper.</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}
