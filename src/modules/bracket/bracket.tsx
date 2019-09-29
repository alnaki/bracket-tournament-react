import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BracketColumn from './column';

export default class Bracket extends Component {
    render() {
        return (
            <Grid className="bracket" container>
                <BracketColumn round={1}></BracketColumn>
                <BracketColumn round={2}></BracketColumn>
                <BracketColumn round={3}></BracketColumn>
            </Grid>
        );
    }
}