import React, { Component } from 'react';
import { IRound } from '../../config/model';
import Round from '../round/round';
import { Grid } from '@material-ui/core';

type Props = {
  rounds: IRound[]
}

export default class BracketRounds extends Component<Props> {

  render() {
    return (

      <Grid container>
        {/* {this.props.bracket.rounds
                .slice()
                .reverse()
                .map((round, i) => (
                  <Round
                    key={i}
                    round={round}
                    bracket={this.props.bracket}
                  />
                ))} */}


        {this.props.rounds.map((roundItem, index) => (
          <Grid item>
            <Round round={roundItem} />
          </Grid>
        ))}
      </Grid>
    )
  }
}