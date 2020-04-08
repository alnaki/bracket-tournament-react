import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { IBracket, ITeam } from "../../config/model";
import Round from "../round/round";
import BracketLeftDrawer from "./bracketLeftDrawer";
import BracketRightDrawer from "./bracketRightDrawer";
import { DragDropContext } from "react-beautiful-dnd";
import { nbMinDuelByNbTeam, initEmptyBracket, listFirstDuels, initTeamBracket } from "../../services/bracketService";

type Props = {
  bracketState: IBracket;
  teams: ITeam[];
};
type State = {};

class Bracket extends Component<Props, State & IBracket> {
  state = {
    id: "tournament",
    name: "Tournament",
    editionMode: true,
    nbTeamMaxByDuel: 2, 
    nbTeamWinner: 1,
    rounds: []
  };

  handleInitEmptyBracket() {
    let nbTeam = this.props.teams.length;
    let nbDuel = nbMinDuelByNbTeam(
      nbTeam,
      this.props.bracketState.nbTeamMaxByDuel
    );
    let rounds = initEmptyBracket(nbDuel);
    // this.setState({ roundsId: rounds });
  }

  handleInitTeamBracket() {
    let nbTeam = this.props.teams.length;
    let nbDuel = nbMinDuelByNbTeam(
      nbTeam,
      this.props.bracketState.nbTeamMaxByDuel
    );
    let duels = listFirstDuels(nbDuel, this.props.teams);
    let rounds = initTeamBracket(duels);
    // this.setState({ roundsId: rounds });
  }

  handleAddDuel() {}

  dragEnd(result:any) {
    console.log(result)
  }

  dragStart(result:any) {
    console.log(result)
  }

  render() {
    return (
      <DragDropContext onDragEnd={result => this.dragEnd(result)} onDragStart={result => this.dragStart(result)}>
      <BracketRightDrawer>
        <BracketLeftDrawer
          bracketState={this.props.bracketState}
          initTeamBracket={this.handleInitTeamBracket.bind(this)}
        >
          <Grid container>
            {this.state.rounds
              .slice()
              .reverse()
              .map((round, i) => (
                <Round
                  key={i}
                  round={round}
                  bracketState={this.props.bracketState}
                />
              ))}
          </Grid>
        </BracketLeftDrawer>
      </BracketRightDrawer>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bracketState: state.bracket,
  teams: state.teams.teams
});
export default connect(mapStateToProps)(Bracket);