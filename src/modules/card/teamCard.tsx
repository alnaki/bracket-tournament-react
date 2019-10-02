import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import { ICard } from '../../shared/model/card.model';
import { Avatar, CardHeader, IconButton } from '@material-ui/core';

type Props = {
  id?: number,
  name?: string,
  avatar?: string,
}
type State = {}

export default class TeamCard extends Component<Props, State>{

  render() {
    return (
      <Card>
        <CardHeader avatar={<Avatar aria-label="Recipe">
          {this.props.id}
        </Avatar>} action={<IconButton>
        </IconButton>} title={this.props.name} subheader="" />
      </Card>
    );
  }
}