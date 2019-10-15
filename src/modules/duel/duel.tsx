import { Card } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { IDuel } from "../../model/duel";
import { AppState } from "../../store";
import { ITeam } from "../../store/team/types";
import TeamCard from "../team/teamCard";

const DuelRoot = styled.div`
  max-width: 275px;
  margin-bottom: 10px;
`;

type Props = {
  duel: IDuel;
  teams: ITeam[];
  edition: boolean;
  nbTeamMaxByDuel: number;
};
class Duel extends Component<Props> {
  deleteTeam() {}

  addTeam = (_event: any) => {
    if (this.props.teams.length >= this.props.nbTeamMaxByDuel) return;
    let elem = {
      name: "New Player",
      playerList: []
    };
    // ajouter le joueur dans le state
  };

  render() {
    return (
      <DuelRoot>
        <Card>
          {this.props.duel.scoring.map(s => (
            <TeamCard team={s.team} variant={"medium"} />
          ))}
        </Card>
      </DuelRoot>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  teams: state.teams.teams,
  edition: state.bracket.edition,
  nbTeamMaxByDuel: state.bracket.nbTeamMaxByDuel
});

export default connect(mapStateToProps)(Duel);
