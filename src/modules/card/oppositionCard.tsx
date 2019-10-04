import React, { Component } from "react";
import { Card, CardActions, CardHeader, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import TeamCard from "./teamCard";

const OppositionRoot = styled.div`
  max-width: 275px;
  margin-bottom: 10px;
`;

export default class OppositionCard extends Component {
  state = {
    teamList: [
      {
        avatar: "https://loremflickr.com/640/360",
        name: "player 2"
      }
    ]
  };

  deleteTeam() {}

  addTeam = (_event: any) => {
    if (this.state.teamList.length >= 8) return;
    let elem = {
      name: "New Player"
    };
    this.setState({
      teamList: [...this.state.teamList, elem]
    });
  };

  render() {
    const list = this.state.teamList.map((s, i) => (
      <TeamCard key={i} name={s.name} avatar={s.avatar} />
    ));

    return (
      <OppositionRoot>
        <Card>
          <CardHeader title="Opposition 1" />
          {list}
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              aria-label="add"
              onClick={this.addTeam}
              fullWidth
            >
              <AddIcon />
            </Button>
          </CardActions>
        </Card>
      </OppositionRoot>
    );
  }
}
