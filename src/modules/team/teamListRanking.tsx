import React, { Component } from "react";
import { ITeam } from "../../store/team/types";
import TeamCard from "./teamCard";
import { List, ListItem } from "@material-ui/core";
import { AppState } from "../../store";
import { connect } from "react-redux";

type Props = {
  teams: ITeam[];
};
class TeamListRanking extends Component<Props> {
  render() {
    return (
      <List>
        {this.props.teams.map((t, i) => (
          <ListItem key={i}>
            <TeamCard team={t} />
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  teams: state.teams.teams
});

export default connect(
  mapStateToProps,
)(TeamListRanking);
