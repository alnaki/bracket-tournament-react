import React, { Component } from "react";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  name?: string;
};
type State = {
  playerList: any;
  titleTeam?: string;
};

export default class TeamForm extends Component<Props, State> {
  state = {
    titleTeam: "",
    playerList: [
      {
        name: "Player name",
        avatar: undefined,
        edition: false
      }
    ]
  };

  handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  addPlayer = (_event: any) => {
    if (this.state.playerList.length >= 8) return;
    let elem = {
      name: "ajout"
    };
    this.setState({
      playerList: [...this.state.playerList, elem]
    });
  };

  keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === "Enter") {
      // send();
    }
  }

  render() {
    return (
      <div>
        <TextField
          id="standard-name"
          label="Nom de la team"
          value={this.state.titleTeam}
          onChange={this.handleChange("titleTeam")}
          margin="normal"
        />
        {this.state.playerList.map((s, i) => (
          <div key={i}>{s.name}</div>
        ))}
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          onClick={this.addPlayer}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}
