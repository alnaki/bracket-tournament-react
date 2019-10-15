import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import Duel from "../duel/duel";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  edition: boolean;
  nbDuel: number;
};
type State = {
  duels: Duel[];
};
export default class Round extends Component<Props, State> {
  static DefaultProps = {
    nbDuel: 1
  };
  state = { duels: this.initDuels() };

  initDuels(): Duel[] {
    let duels: Duel[] = [];
    for (let i = 0; i < this.props.nbDuel; i++) {
      duels.push(new Duel({ edition: this.props.edition, nbTeamMaxByDuel: 2 }));
    }
    return duels;
  }

  addDuel = (_event: any) => {};

  render() {
    return (
      <Grid className="bracket-column">
        <h4>Round 1</h4>
        <Duel edition={this.props.edition} nbTeamMaxByDuel={2} />
        {this.state.duels.map(duel => duel)}
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
