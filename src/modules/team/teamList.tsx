import React, { Component } from "react";
import { ITeam } from "../../store/team/types";
import TeamCard from "./teamCard";
import { List, ListItem, Card, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { addTeam } from "../../store/team/actions";
import { initBracket } from "../../util/bracket";
import { AppState } from "../../store";

type Props = {
  states: AppState;
  teams: ITeam[];
  addTeam: (arg0: undefined) => void;
  initRounds: (rounds: Round[]) => void;
};
class TeamList extends Component<Props> {
  handleAddTeam = (_event: any) => {
    this.props.addTeam(undefined);
  };

  handleInitBracket = () => {
    let rounds = initBracket(this.props.states);
    this.props.initRounds(rounds);
  };

  render() {
    return (
      <div>
        <List>
          {this.props.teams.map((t, i) => (
            <ListItem key={i}>
              <Card style={{ width: "inherit" }}>
                <TeamCard team={t} />
              </Card>
            </ListItem>
          ))}
        </List>
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
          onClick={this.handleInitBracket}
          fullWidth
        >
          Générer tournois aléatoire
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  states: state,
  teams: state.teams.teams
});

const mapDispatchToProps = (dispatch: any) => ({
  addTeam: (team: ITeam | undefined) => dispatch(addTeam(team), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamList);
