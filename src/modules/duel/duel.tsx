import { Card } from "@material-ui/core";
import React, { Component } from "react";
import { IDuel, IBracket, ITeam } from "../../config/model";
import TeamCardWithScore from "../team/teamCardWithScore";
// import { Droppable } from "react-beautiful-dnd";
import { findById as findDuelById } from "../../services/teamService";
import { AppState } from "../../store";
import { connect } from "react-redux";

type Props = {
  bracket: IBracket;
  duel: IDuel;
  duelNumber?: number;
  teamStore: ITeam[];
};
class Duel extends Component<Props, IDuel> {

  nbSkeletonInEdition(): number {
    return (
      this.props.bracket.nbTeamMaxByDuel - this.props.duel.duelsScore.length
    );
  }

  render() {
    return (
      // <Droppable droppableId={this.props.}>
      <Card>
        <h5>1</h5>
        {this.props.duel.duelsScore.map((score, i) => (
          <TeamCardWithScore team={findDuelById(score.idTeam, this.props.teamStore)} score={0} />
        ))}
        {/* {this.props.bracket.editionMode &&
          Array(this.nbSkeletonInEdition()).fill(<TeamCard edition={true} />)} */}
      </Card>
      // </Droppable>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  teamStore: state.teams.teams,
});

export default connect(mapStateToProps)(Duel);