import React, { Component } from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import TeamCard from "./teamCard";
import { connect } from "react-redux";
import { AppState } from "../../store";

const OppositionRoot = styled.div`
  max-width: 275px;
  margin-bottom: 10px;
`;

type Props = {
  edition: boolean;
  nbTeamMaxByDuel: number;
};
class TeamDuel extends Component<Props> {
  state = {
    teams: [
      {
        id: 1,
        avatar: "https://loremflickr.com/640/360",
        name: "player 2",
        playerList: []
      }
    ]
  };

  deleteTeam() {}

  addTeam = (_event: any) => {
    if (this.state.teams.length >= this.props.nbTeamMaxByDuel) return;
    let elem = {
      name: "New Player",
      playerList: []
    };

    this.setState({
      teamList: [...this.state.teams, elem]
    });
  };

  render() {
    return (
      <OppositionRoot>
        <Card>
          {this.state.teams.map((s, i) => (
            <TeamCard key={i} team={s} variant={"medium"} />
          ))}
        </Card>
      </OppositionRoot>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  edition: state.bracket.edition,
  nbTeamMaxByDuel: state.bracket.nbTeamMaxByDuel
});

export default connect(mapStateToProps)(TeamDuel);
