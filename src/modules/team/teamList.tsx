import React, { Component } from "react";
import { ITeam } from "../../store/team/types";
import TeamCard from "./teamCard";
import { List, ListItem, Card, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { addTeam } from "../../store/team/actions";

type Props = {
  teams: ITeam[];
  addTeam: (arg0: undefined) => void;
};
class TeamList extends Component<Props> {
  handleAddTeam = (_event: any) => {
    this.props.addTeam(undefined);
  };

  render() {
    return (
      <div>
        <List>
          {this.props.teams.map(t => (
            <ListItem>
              <Card>
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addTeam: (team: ITeam | undefined) => dispatch(addTeam(team), dispatch)
});

export default connect(
  undefined,
  mapDispatchToProps
)(TeamList);
