import { Card } from "@material-ui/core";
import React, { Component } from "react";
import styled from "styled-components";
import { BracketState } from "../../store/bracket/types";
import { IDuel } from "../../config/model";
import DuelScore from "./duelScore";

const DuelRoot = styled.div`
  max-width: 275px;
  margin-bottom: 10px;
`;

type Props = {
  bracketState: BracketState;
  duel?: IDuel;
};
export default class Duel extends Component<Props, IDuel> {
  state = {
    duelsScore: this.props.duel ? this.props.duel.duelsScore : []
  };
  deleteTeam() {}

  addTeam = (_event: any) => {
    if (this.state.duelsScore.length >= this.props.bracketState.nbTeamMaxByDuel)
      return;
    let elem = {
      name: "New Player",
      playerList: []
    };
    // ajouter le joueur dans le state
  };

  render() {
    return (
      <DuelRoot>
        Duel
        {/* {this.state.duelsScore.map(score => (
          <DuelScore bracketState={this.props.bracketState} duelScore={score} />
        ))} */}
        <Card />
      </DuelRoot>
    );
  }
}
