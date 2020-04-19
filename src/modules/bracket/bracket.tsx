import React, { Component } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { IBracket, ITeam } from "../../config/model";
import { AppState } from "../../store";
import { changeTeamIds } from "../../store/bracket/actions";
import BracketLeftDrawer from "./bracketLeftDrawer";
import BracketRightDrawer from "./bracketRightDrawer";
import BracketRounds from "./bracketRounds";

type Props = {
  bracket: IBracket;
  teams: ITeam[];
  changeTeamIds: (arg0: string[]) => void;
};
type State = {};

class Bracket extends Component<Props, State & IBracket> {

  /**
   * If drag from player list : copy.\
   * If drag from duel :
   * - in same duel : move
   * - in other duel and same round: move
   * - in other duel and other round: copy
   * @param result 
   */
  dragEnd(result: DropResult) {
    console.log("dragEnd: ", result);

    const { source, destination, draggableId } = result;
    // Any modification
    if (!destination) return false;
    if (destination.droppableId === source.droppableId
      && destination.index === source.index) return false;

    // Move in same list
    if (destination.droppableId === source.droppableId
      && destination.index !== source.index) {
      if ("teamList" === source.droppableId) {
        const newTeamList = Array.from(this.props.bracket.teamIds);
        newTeamList.splice(source.index, 1);
        newTeamList.splice(destination.index, 0, draggableId)
        this.props.changeTeamIds(newTeamList);
      }

      // Move in different list
    } else {
      if ("teamList" === source.droppableId) {
      }
    }
  }

  dragStart(result: any) {
    // console.log("dragStart: ", result)
  }

  handleInitEmptyBracket() {
  }

  handleInitTeamBracket() {
  }

  handleAddDuel() { }



  render() {
    return (
      <DragDropContext onDragEnd={result => this.dragEnd(result)} onDragStart={result => this.dragStart(result)}>
        <BracketRightDrawer>
          <BracketLeftDrawer
            bracket={this.props.bracket}
            initTeamBracket={this.handleInitTeamBracket.bind(this)}
          >
            <BracketRounds rounds={this.props.bracket.rounds}></BracketRounds>
          </BracketLeftDrawer>
        </BracketRightDrawer>
      </DragDropContext>
    );
  }
}


const mapDispatchToProps = (dispatch: any) => ({
  changeTeamIds: (value: string[]) => dispatch(changeTeamIds(value), dispatch),
});

const mapStateToProps = (state: AppState) => ({
  bracket: state.bracket,
  teams: state.teams.teams
});
export default connect(mapStateToProps, mapDispatchToProps)(Bracket);