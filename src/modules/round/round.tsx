import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import TeamDuel from "../team/teamDuel";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { IDuel } from "../../model/duel";

type Props = {
  edition: boolean;
  duels: IDuel[];
};
export default class Round extends Component<Props> {
  addDuel = (_event: any) => {};

  render() {
    return (
      <Grid className="bracket-column">
        <h1>Round 1</h1>
        {this.props.duels.map((s, i) => (
          <TeamDuel duel={s} key={i} />
        ))}
        {this.props.edition && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.addDuel}
            fullWidth
          >
            <AddIcon />
          </Button>
        )}
      </Grid>
    );
  }
}