import React, { Component } from "react";
import { ITeam } from "../../store/team/types";
import TeamCard from "./teamCard";
import { List, ListItem, Card } from "@material-ui/core";

type Props = {
  teams: ITeam[];
};
export default class TeamList extends Component<Props> {
  render() {
    return (
      <List>
        {this.props.teams.map(t => (
          <ListItem>
            <Card>
              <TeamCard team={t} />
            </Card>
          </ListItem>
        ))}
      </List>
    );
  }
}
