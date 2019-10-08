import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import OppositionCard from "../card/oppositionCard";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { AppState } from "../../shared/store";
import { BracketState } from "../../shared/store/bracket/types";

type Props = {
  params: BracketState;
};
class BracketColumn extends Component<Props> {
  state = {
    oppositionList: [{}]
  };

  addOpposition = (_event: any) => {
    let elem = {};
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
        {this.props.params.mode && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.addOpposition}
            fullWidth
          >
            <AddIcon />
          </Button>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  params: state.bracket
});

export default connect(mapStateToProps)(BracketColumn);
