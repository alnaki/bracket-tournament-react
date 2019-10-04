import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Fab,
  TextField
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import TeamCard from "./teamCard";

const OppositionRoot = styled.div`
  max-width: 275px;
  margin-bottom: 12px;
`;

export default class OppositionCard extends Component {
  state = {
    teamList: [
      {
        name: "player 1"
      },
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
      name: "ajout"
    };
    this.setState({
      listTeam: [...this.state.teamList, elem]
    });
  };

  render() {
    const list = this.state.teamList.map((s, i) => (
      <div>
        <TeamCard key={i} name={s.name} avatar={s.avatar} />
      </div>
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

            {/* <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Toggle Popper
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography>The content of the Popper.</Typography>
                  </Paper>
                </Fade>
              )}
            </Popper> */}
          </CardActions>
        </Card>
      </OppositionRoot>
    );
  }
}
