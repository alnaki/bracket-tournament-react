import React, { Component } from "react";
import { ITeam } from "../../store/team/types";
import TeamCard from "./teamCard";
import { List, ListItem, Card } from "@material-ui/core";

type Props = {
  teams: ITeam[];
};
export default class TeamListRanking extends Component<Props> {
  render() {
    return (
      <List>
        {this.props.teams.map(t => (
          <ListItem>
            <TeamCard team={t} />
          </ListItem>
        ))}
      </List>
    );
  }
}
