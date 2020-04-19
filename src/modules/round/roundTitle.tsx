import React, { Component } from 'react';
import { IRound } from '../../config/model';

type Props = {
  round: IRound
}
type State = { /*states*/ }

export default class NameComponent extends Component<Props, State> {

  render() {
    return (
      // html and components here
      <>
        {this.props.round.name}
      </>
    )
  }
}