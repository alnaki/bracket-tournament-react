import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import OppositionCard from "../card/oppositionCard";
import AddIcon from "@material-ui/icons/Add";

export default class BracketColumn extends Component {
  state = {
    oppositionList: [
      {
        name: "Example"
      }
    ]
  };

  addOpposition = (_event: any) => {
    console.log("Ajout d'une opposition", this.state.oppositionList);
    let elem = { name: "ajout" };
    this.setState({
      oppositionList: [...this.state.oppositionList, elem]
    });
  };

  render() {
    const list = this.state.oppositionList.map((s, i) => (
      <OppositionCard key={i} />
    ));
    return (
      <Grid className="bracket-column">
        <h1>bracket round title</h1>
        {list}
        <Button
          variant="contained"
          color="primary"
          onClick={this.addOpposition}
          fullWidth
        >
          <AddIcon />
        </Button>
      </Grid>
    );
  }
}
