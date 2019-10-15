import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import Duel from "../duel/duel";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  edition: boolean;
  duels: Duel[];
};
export default class Round extends Component<Props> {
  addDuel = (_event: any) => {};

  render() {
    return (
      <Grid className="bracket-column">
        <h4>Match 1</h4>
        {this.props.duels.map((s, i) => (
          <Duel duel={s} key={i} />
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
