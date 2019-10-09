import React, { Component } from "react";
import { Avatar, CardHeader, IconButton, TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

type Props = {
  name?: string;
};
type State = {
  avatar?: string;
  name?: string;
  id?: number;
  edition?: boolean;
};

const MyAvatar = styled(Avatar)({
  color: "#fff",
  backgroundColor: "#e57373"
});

export default class PlayerForm extends Component<Props, State> {
  state = {
    name: this.props.name ? this.props.name : "Player name",
    avatar: undefined,
    edition: false
  };

  isEditMode(): boolean {
    return this.state.edition || this.state.name === "" ? true : false;
  }

  handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleEditMode() {
    this.setState({
      ...this.state,
      edition: true
    });
  }

  handleConsultMode() {
    if (this.state.name !== "")
      this.setState({
        ...this.state,
        edition: false
      });
  }

  render() {
    const avatar = this.state.avatar ? (
      <Avatar src={this.state.avatar} />
    ) : (
      <MyAvatar>{this.state.name.substr(0, 2)}</MyAvatar>
    );

    if (this.isEditMode()) {
      return this.editRender(avatar);
    } else {
      return this.consultRender();
    }
  }

  consultRender() {
    return <div onClick={() => this.handleEditMode()}>{this.state.name}</div>;
  }

  editRender(avatar: JSX.Element) {
    return (
      <div>
        <CardHeader
          avatar={avatar}
          action={
            <div onClick={() => this.handleConsultMode()}>
              <IconButton aria-label="settings">
                <CheckCircleIcon color="primary" />
              </IconButton>
            </div>
          }
          title={
            <TextField
              id="standard-name"
              label="Nom ou pseudo du joueur"
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          }
          subheader=""
        />
      </div>
    );
  }
}
