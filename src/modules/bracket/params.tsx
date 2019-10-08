import React, { Component } from "react";
import PropTypes from "prop-types";

type Props = {};
type State = {
  /*states*/
};

export default class NameComponent extends Component<Props, State> {
  state = {
    // init states here
  };

  static propTypes = {
    // parameters mandatories
    example: PropTypes.object.isRequired
  };

  render() {
    return (
      // html and components here
      <div />
    );
  }
}
