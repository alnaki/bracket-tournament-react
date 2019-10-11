import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";
import Round from "../round/round";
import { changeMode } from "../../store/bracket/actions";
import { AppState } from "../../store";
import { BracketState } from "../../store/bracket/types";
import BracketParamsDrawer from "./bracketParamsDrawer";
import TeamDrawer from "../team/teamDrawer";
import { ITeam } from "../../store/team/types";
import { RoundState } from "../../store/round/types";

type Props = {
  params: BracketState;
  round: RoundState;
  teams: ITeam[];
  changeMode: (arg0: boolean) => void;
};
class Bracket extends Component<Props> {
  handleChangeMode(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeMode(event.target.checked);
  }

  render() {
    return (
      <TeamDrawer teams={this.props.teams} edition={this.props.params.edition}>
        <BracketParamsDrawer>
          <FormControlLabel
            value="start"
            control={
              <Switch
                checked={this.props.params.edition}
                onChange={e => this.handleChangeMode(e)}
                value="mode"
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Mode modification : "
            labelPlacement="start"
          />
          {this.props.params.edition}
          <Grid className="bracket" container>
            {this.props.round.rounds.map((r, i) => (
              <Round key={i} round={r} />
            ))}
          </Grid>
        </BracketParamsDrawer>
      </TeamDrawer>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  params: state.bracket,
  round: state.round,
  teams: state.teams.teams
});

const mapDispatchToProps = (dispatch: any) => ({
  changeMode: (edition: boolean) => dispatch(changeMode(edition), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bracket);
