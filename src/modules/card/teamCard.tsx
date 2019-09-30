import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

type Props = { };
type State = { }

export default class TeamCard extends Component<Props, State> {
  seStyles = makeStyles({
    // write css here
  });

  state = {
    // init states here
  }

  static propTypes = {
    // parameters mandatories
    example: PropTypes.object.isRequired
  }

  render() {
    return (
      // html and components here
      <div>
     
      </div>
    )
  }
}