import React, { Component } from 'react';
import { Grid, FormControlLabel, Switch } from '@material-ui/core';
import BracketColumn from './column';

export default class Bracket extends Component {
    render() {
        return (
            <div>
                <FormControlLabel
                    value="bottom"
                    control={<Switch color="primary" />}
                    label="Bottom"
                    labelPlacement="bottom"
                />
                <Grid className="bracket" container>
                    <BracketColumn round={1}></BracketColumn>
                    <BracketColumn round={2}></BracketColumn>
                    <BracketColumn round={3}></BracketColumn>
                </Grid>
            </div>
        );
    }
}