import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";
import BracketColumn from "./column";
import { changeMode } from "../../shared/store/bracket/actions";
import { AppState } from "../../shared/store";
import { modes } from "react-transition-group/SwitchTransition";

type Props = {
    mode: boolean;
};
class Bracket extends Component<Props> {
    state = {
        mode: this.props.mode? this.props.mode : false,
    };

     handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, [name]: event.target.checked });
      };

    render() {
        return (
            <div>
                <FormControlLabel
                    value="top"
                    control={      <Switch
                        checked={this.state.mode}
                        onChange={this.handleChange("mode")}
                        value="checkedB"
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />}
                    label="Mode modification"
                    labelPlacement="top"
                />
                {this.state.mode}
                <Grid className="bracket" container>
                    <BracketColumn />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    mode: state.bracket.mode,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; mode: any; }) => void) => ({
    changeMode: (mode: boolean) => dispatch(changeMode(mode))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bracket);
