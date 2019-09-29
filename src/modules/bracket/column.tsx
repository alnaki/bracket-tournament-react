import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BracketColumn extends Component {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            round: 1,
            cards: []
        }

    }

    static propTypes = {
        round: PropTypes.number.isRequired,
    }

    render() {
        return (
            <div className="bracket-column">
                <div>bracket round title</div>
                <div>list</div>
            </div>
        );
    }
}