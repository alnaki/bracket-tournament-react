import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import TeamDuel from "../team/teamDuel";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { AppState } from "../../shared/store";
import { BracketState } from "../../shared/store/bracket/types";

type Props = {
  params: BracketState;
};
class Round extends Component<Props> {
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
    const list = this.state.oppositionList.map((s, i) => <TeamDuel key={i} />);
    return (
      <Grid className="bracket-column">
        <h1>bracket round title</h1>
        {list}
        {this.props.params.edition && (
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

export default connect(mapStateToProps)(Round);
