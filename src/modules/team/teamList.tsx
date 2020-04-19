import React, { Component } from "react";
import { ITeam } from "../../config/model";
import TeamCard from "./teamCard";
import { ListItem, Card, Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { addTeam } from "../../store/team/actions";
import { AppState } from "../../store";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { findById } from "../../services/teamService";

type Props = {
  teamStore: ITeam[];
  addTeam: (arg0: undefined) => void;
  initTeamBracket: () => void;
  teamIds: string[];
};
type State = {
  nbTeam: number;
};

class TeamList extends Component<Props, State> {
  state = {
    nbTeam: this.props.teamStore.length
  };
  handleAddTeam = (_event: any) => {
    this.props.addTeam(undefined);
  };
  handleInitBracket = () => {
    this.props.initTeamBracket();
  };
  handleChangeNbTeam(
    input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let nbTeam = Number(input.target.value);
    if (0 < nbTeam && nbTeam <= 256)
      this.setState({ ...this.state, nbTeam: Number(input.target.value) });
  }
  render() {
    return (
      <>
        <TextField
          type="number"
          value={this.state.nbTeam}
          onChange={e => this.handleChangeNbTeam(e)}
          InputLabelProps={{
            shrink: true
          }}
          variant="standard"
        />

        <Droppable droppableId="teamList">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.teamIds.map((teamId, index) => (
                <Draggable draggableId={teamId} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListItem key={index}>
                        <Card style={{ width: "inherit" }}>
                          <TeamCard team={findById(teamId, this.props.teamStore)} />
                        </Card>
                      </ListItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>


        {/* <List>
          {this.props.teams.map((t, index) => (
            <ListItem key={index}>
              <Card style={{ width: "inherit" }}>
                <TeamCard team={t} />
              </Card>
            </ListItem>
          ))}
        </List> */}
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleAddTeam}
          fullWidth
        >
          <AddIcon />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.initTeamBracket}
          fullWidth
        >
          Générer tournois aléatoire
        </Button>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  teamStore: state.teams.teams
});
const mapDispatchToProps = (dispatch: any) => ({
  addTeam: (team: ITeam | undefined) => dispatch(addTeam(team), dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamList);
