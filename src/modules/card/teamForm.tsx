import React, { Component } from "react";
import PlayerForm from "./playerForm";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  /*props*/
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

  render() {
    const list = this.state.playerList.map((s, i) => (
      <div>
        <PlayerForm key={i} />
      </div>
    ));

    return (
      <div>
        <h2>
          <TextField
            id="standard-name"
            label="Nom de la team"
            value={this.state.titleTeam}
            onChange={this.handleChange("titleTeam")}
            margin="normal"
          />
        </h2>
        {list}
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
