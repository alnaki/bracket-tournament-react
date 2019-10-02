import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Card, CardActions, CardHeader, Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import TeamCard from "./teamCard";

const OppositionRoot = styled.div`
  max-width: 275px;
  margin-bottom: 12px;
`;

const Opp = styled.div`
  padding: 10px;
`;

export default class OppositionCard extends Component {
  state = {
    listTeam: [{
      id: 1,
      avatar: "https://loremflickr.com/640/360",
      name: "player 1",
    },
    {
      id: 2,
      avatar: "https://loremflickr.com/640/360",
      name: "player 2",
    }],
  };

  deleteTeam() { }

  addTeam = (_event: any) => {
    console.log("this vaut :", this.state.listTeam);
    if (this.state.listTeam.length >= 8) return;
    let elem = {
      title: "Element ajouté",
      content: "Hey"
    };
    this.setState({
      listTeam: [...this.state.listTeam, elem]
    });
  };

  render() {
    const list = this.state.listTeam.map(s => (
      <TeamCard name={s.name} ></TeamCard>
    ));
    return (
      <OppositionRoot>
        <Card>
          <CardHeader title="Opposition 1" />
          {list}
          <CardActions>
            <TextField
              id="standard-name"
            // onChange={handleChange("name")}
            />
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              onClick={this.addTeam}
            >
              <AddIcon />
            </Fab>
          </CardActions>
        </Card>
      </OppositionRoot>
    );
  }
}
