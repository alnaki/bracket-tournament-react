import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

type Props = {
  edition: boolean;
  children: React.ReactNode;
  score: number | "V" | "D" | "X";
};
export default class DuelScore extends Component<Props> {
  render() {
    return (
      <Grid container>
        <Grid item>{this.props.children}</Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>{this.props.score}</Grid>
      </Grid>
    );
  }
}
