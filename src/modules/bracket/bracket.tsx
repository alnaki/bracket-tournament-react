import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";
import BracketColumn from "./column";
import { changeMode } from "../../shared/store/bracket/actions";

type Props = {};
type State = { mode: boolean };
class Bracket extends Component<Props, State> {
    state = {
        mode: true
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
                {this.state.mode}
                <Grid className="bracket" container>
                    <BracketColumn />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: { mode: any; }) => ({
    mode: state.mode
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; mode: any; }) => void) => ({
    changeMode: (mode: boolean) => dispatch(changeMode(mode))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bracket);
