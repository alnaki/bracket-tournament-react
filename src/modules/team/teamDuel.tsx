import React, { Component } from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import TeamCard from "./teamCard";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { ITeam } from "../../store/team/types";
import { IDuel } from "../../store/duel/types";

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
class TeamDuel extends Component<Props> {
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
          {this.props.duel.teams
            .map(s => this.props.teams.find(t => s.idTeam === t.id))
            .map(s => (
              <TeamCard team={s!} variant={"medium"} />
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

export default connect(mapStateToProps)(TeamDuel);
