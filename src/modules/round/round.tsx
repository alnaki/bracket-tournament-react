import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import TeamDuel from "../team/teamDuel";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { BracketState } from "../../store/bracket/types";
import { IRound } from "../../store/round/types";
import { IDuel } from "../../store/duel/types";

type Props = {
  params: BracketState;
  duels: IDuel[];
  round: IRound;
};
class Round extends Component<Props> {
  addDuel = (_event: any) => {};

  render() {
    console.log(this.props.round.duels);
    console.log(this.props.duels);
    const duels = this.props.round.duels
      .map(s => this.props.duels.find(d => s === d.id))
      .filter(s => s !== undefined);
    console.log(duels);
    return (
      <Grid className="bracket-column">
        <h1>Round 1</h1>
        {duels.map((s, i) => (
          <TeamDuel duel={s!} key={i} />
        ))}
        {this.props.params.edition && (
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

const mapStateToProps = (state: AppState) => ({
  duels: state.duel.duels,
  params: state.bracket
});

export default connect(mapStateToProps)(Round);
