import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import ContentCard from './card';
import { ICard } from '../../shared/model/card.model';

type Props = {
    team1: ICard;
    team2?: ICard;
}
type State = { }

export default class OppositionCard extends Component<Props, State> {
  seStyles = makeStyles({
    // write css here
  });

  state = {
    // init states here
  }

  static propTypes = {
    team1: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
          <ContentCard card={this.props.team1}></ContentCard>
          {this.props.team2 && <ContentCard card={this.props.team2}></ContentCard>}
      </div>
    )
  }
}