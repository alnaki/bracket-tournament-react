import React, { Component } from "react";
import { Card, CardActions, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import TeamCard from "./teamCard";
import { connect } from "react-redux";
import { AppState } from "../../shared/store";

const OppositionRoot = styled.div`
  max-width: 275px;
  margin-bottom: 10px;
`;

type Props = {
  edition?: boolean;
  nbPlayerMaxByTeam?: number;
};
class TeamDuel extends Component<Props> {
  state = {
    nbPlayerMaxByTeam: this.props.nbPlayerMaxByTeam
      ? this.props.nbPlayerMaxByTeam
      : 2,
    teamList: [
      {
        id: 1,
        avatar: "https://loremflickr.com/640/360",
        name: "player 2"
      }
    ]
  };

  deleteTeam() {}

  addTeam = (_event: any) => {
    if (this.state.teamList.length >= this.state.nbPlayerMaxByTeam) return;
    let elem = {
      name: "New Player"
    };

    this.setState({
      teamList: [...this.state.teamList, elem]
    });
  };

  render() {
    const list = this.state.teamList.map((s, i) => (
      <TeamCard key={i} team={s} />
    ));

    return (
      <OppositionRoot>
        <Card>
          {list}
          {this.state.teamList.length < this.state.nbPlayerMaxByTeam &&
            this.props.edition && (
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  aria-label="add"
                  onClick={this.addTeam}
                  fullWidth
                >
                  <AddIcon />
                </Button>
              </CardActions>
            )}
        </Card>
      </OppositionRoot>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  edition: state.bracket.edition,
  nbPlayerMaxByTeam: state.bracket.nbPlayerMaxByTeam
});

export default connect(mapStateToProps)(TeamDuel);
