import React, { Component } from "react";
import { ITeam } from "../../shared/store/team/types";

type Props = {
  teams: ITeam[];
};
type State = {
  /*states*/
};

export default class NameComponent extends Component<Props, State> {
  state = {
    // init states here
  };

  render() {
    return <div />;
  }
}
