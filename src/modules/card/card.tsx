import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { ICard } from '../../shared/model/card.model';
import { Typography } from '@material-ui/core';

type Props = { card: ICard }
type State = {}

export default class ContentCard extends Component<Props, State>{

  render() {
    return (
      <Card >
        <CardContent>
            { this.props.card.name }
        </CardContent>
      </Card>
    );
  }
}
