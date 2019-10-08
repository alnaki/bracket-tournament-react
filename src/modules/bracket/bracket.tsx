import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";
import Round from "./round";
import { changeMode } from "../../shared/store/bracket/actions";
import { AppState } from "../../shared/store";
import { BracketState } from "../../shared/store/bracket/types";
import PersistanceDrawerLeft from "./bracketParams";

type Props = {
  params: BracketState;
  changeMode: (arg0: boolean) => void;
};
class Bracket extends Component<Props> {
  handleChangeMode(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeMode(event.target.checked);
    this.setState({
      ...this.state,
      mode: event.target.checked
    });
  }

  render() {
    return (
      <div>
        <PersistanceDrawerLeft>
          <FormControlLabel
            value="start"
            control={
              <Switch
                checked={this.props.params.mode}
                onChange={e => this.handleChangeMode(e)}
                value="mode"
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Mode modification : "
            labelPlacement="start"
          />
          {this.props.params.mode}
          <Grid className="bracket" container>
            <Round />
          </Grid>
        </PersistanceDrawerLeft>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  params: state.bracket
});

const mapDispatchToProps = (dispatch: any) => ({
  changeMode: (mode: boolean) => dispatch(changeMode(mode), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bracket);
