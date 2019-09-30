import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import { Grid, Card } from '@material-ui/core';
import { tournament } from '../../config/store';
import ContentCard from '../card/card';
import { ICard } from '../../shared/model/card.model';
import OppositionCard from '../card/oppositionCard';

type Props = { round: number }
type State = { cards: ICard[] }

export default class BracketColumn extends Component<Props, State> {
    state = {
        cards: [...tournament]
    }

    static propTypes = {
        round: PropTypes.number.isRequired,
    }

    render() {

        const cards = this.state.cards.map((card) => (
            <OppositionCard team1={card} team2={card}></OppositionCard>
        ));

        return (
            <Grid className="bracket-column" xs>
                <h1>bracket round title</h1>
                {cards}
            </Grid>
        );
    }
}