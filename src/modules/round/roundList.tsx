import React, { Component } from "react";
import { connect } from "react-redux";
import { IBracket, IDuel, IRound } from "../../config/model";
import { AppState } from "../../store";
import Duel from "../duel/duel";
import { findById as findDuelById } from "../../services/duelService"

type Props = {
  round: IRound;
  duelStore: IDuel[];
  bracket: IBracket;
};
class RoundList extends Component<Props> {

  render() {
    return (
      <>
        {this.props.round.duelsId.map((duelId) => (
          <Duel bracket={this.props.bracket} duel={findDuelById(duelId, this.props.duelStore)}></Duel>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bracket: state.bracket,
  duelStore: state.duels.duelList
});
export default connect(
  mapStateToProps,
)(RoundList);