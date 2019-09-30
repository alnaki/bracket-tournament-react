import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import { ICard } from '../../shared/model/card.model';
import { Avatar, CardHeader, IconButton } from '@material-ui/core';

type Props = { card: ICard }
type State = {}

export default class ContentCard extends Component<Props, State>{

  render() {
    return (
      <Card>
        <CardHeader avatar={ <Avatar aria-label="Recipe">
            { this.props.card.id }
          </Avatar> } action={<IconButton>
          </IconButton>} title={ this.props.card.name } subheader="" />
      </Card>
    );
  }
}