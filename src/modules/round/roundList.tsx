import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { IRound } from "../../model/round";
import Round from "./round";
import { AppState } from "../../store";
import { connect } from "react-redux";

type Props = {
  edition: boolean;
  rounds: IRound[];
};
class RoundList extends Component<Props> {
  render() {
    return (
      <Grid item xs>
        <h2>Round 1</h2>
        {this.props.rounds.map(round => (
          <Round duels={round.duels} edition={this.props.edition} />
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  edition: state.bracket.edition
});
export default connect(mapStateToProps)(RoundList);
