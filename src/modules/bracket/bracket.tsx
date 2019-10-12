import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";
import Round from "../round/round";
import { changeMode } from "../../store/bracket/actions";
import { AppState } from "../../store";
import { BracketState } from "../../store/bracket/types";
import BracketRightDrawer from "./bracketRightDrawer";
import BracketLeftDrawer from "./bracketLeftDrawer";
import { ITeam } from "../../store/team/types";
import RoundList from "../round/roundList";
import { IRound } from "../../model/round";

type Props = {
  bracket: BracketState;
  changeMode: (arg0: boolean) => void;
};
type State = {
  rounds: IRound[];
};

class Bracket extends Component<Props, State> {
  state = {
    rounds: []
  }
  handleChangeMode(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeMode(event.target.checked);
  }
  render() {
    return (
      <div>
        <BracketLeftDrawer />
        <BracketRightDrawer />
        <FormControlLabel
          value="start"
          control={
            <Switch
              checked={this.props.bracket.edition}
              onChange={e => this.handleChangeMode(e)}
              value="mode"
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          label="Mode modification : "
          labelPlacement="start"
        />
        <Grid className="bracket" container>
          <RoundList rounds={this.state.rounds} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bracket: state.bracket,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeMode: (edition: boolean) => dispatch(changeMode(edition), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bracket);
