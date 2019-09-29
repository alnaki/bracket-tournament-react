import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default class ContentCard extends Component{
  useStyles = makeStyles({
    card: {
      minWidth: 275
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });

  classes = this.useStyles();

  render() {
    return (
      <Card className={ this.classes.card }>
        <CardContent>

        </CardContent>
      </Card>
    );
  }
}
