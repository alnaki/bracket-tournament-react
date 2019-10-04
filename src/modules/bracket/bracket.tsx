import React, { Component } from "react";
// import { connect } from "react-redux";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";
import BracketColumn from "./column";
import PropTypes from "prop-types";
import { changeMode } from "../../shared/actions/bracket";

type Props = {};
type State = { mode: boolean };
export default class Bracket extends Component<Props, State> {
  state = {
    mode: true
  };
  propTypes = {
    mode: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div>
        <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label="Mode modification"
          labelPlacement="top"
          onChange={() => changeMode(this.state.mode)}
        />
        <Grid className="bracket" container>
          <BracketColumn />
        </Grid>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   mode: state.mode
// });

// const mapDispatchToProps = dispatch => ({
//   changeMode: (mode: boolean) => dispatch(changeMode(mode))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Bracket);
