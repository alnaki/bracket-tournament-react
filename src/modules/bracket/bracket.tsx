import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";
import BracketColumn from "./column";
import { changeMode } from "../../shared/store/bracket/actions";
import { AppState } from "../../shared/store";

type Props = {
    mode: boolean;
};
class Bracket extends Component<Props> {
    state = {
        mode: this.props.mode ? this.props.mode : false,
    };

    changeMode(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("mode: ", event.target.checked)
        this.setState({
            ...this.state,
            mode: event.target.checked,
        });
    };

    render() {
        return (
            <div>
                <FormControlLabel
                    value="top"
                    control={<Switch
                        checked={this.state.mode}
                        onChange={(e) => this.changeMode(e)}
                        value="mode"
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

const mapDispatchToProps = (dispatch: any) => ({
    changeMode: (mode: boolean) => dispatch(changeMode(mode), dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bracket);
