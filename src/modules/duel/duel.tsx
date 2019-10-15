import { Card } from "@material-ui/core";
import React, { Component } from "react";
import styled from "styled-components";
import DuelScore from "./duelScore";

const DuelRoot = styled.div`
  max-width: 275px;
  margin-bottom: 10px;
`;

type Props = {
  edition: boolean;
  nbTeamMaxByDuel: number;
};
type State = {
  duelsScore: DuelScore[];
};
export default class Duel extends Component<Props, State> {
  deleteTeam() {}

  addTeam = (_event: any) => {
    if (this.state.duelsScore.length >= this.props.nbTeamMaxByDuel) return;
    let elem = {
      name: "New Player",
      playerList: []
    };
    // ajouter le joueur dans le state
  };

  render() {
    return (
      <DuelRoot>
        <Card />
      </DuelRoot>
    );
  }
}
