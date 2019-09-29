import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import { Grid, Card } from '@material-ui/core';
import { tournament } from '../../config/store';
import ContentCard from '../card/card';
import { ICard } from '../../shared/model/card.model';

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
        const cards = this.state.cards.map( (card) => (
            <ContentCard card={ card }></ContentCard>
        ));

        return (
            <Grid className="bracket-column" xs>
                <div>bracket round title</div>
                <div>list</div>
                { cards }
            </Grid>
        );
    }
}