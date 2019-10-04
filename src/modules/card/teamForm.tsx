import React, { Component } from "react";

type Props = {
  /*props*/
};
type State = {
  playerList: any;
};

export default class TeamForm extends Component<Props, State> {
  state = {
    playerList: [
      {
        name: "Player name",
        avatar: undefined,
        edition: false
      }
    ]
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
    return (
      // html and components here
      <div />
    );
  }
}
