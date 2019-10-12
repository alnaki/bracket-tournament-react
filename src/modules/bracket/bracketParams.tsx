import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import { BracketState } from "../../store/bracket/types";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { changeMode } from "../../store/bracket/actions";

const textfield = { width: "40px", height: "30px" }

type Props = {
  bracket: BracketState;
  changeMode: (arg0: boolean) => void;
}
class BracketParams extends Component<Props> {
  handleChangeMode(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeMode(event.target.checked);
  }

  handleChangeNbMaxPlayer(event: React.ChangeEvent<HTMLInputElement>) {
  }

  render() {
    return (
      <List>
        <ListItem>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-edit" primary="Mode edition" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              checked={this.props.bracket.edition}
              onChange={e => this.handleChangeMode(e)}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-edit" primary="Nombre de team max par duels" />
          <ListItemSecondaryAction>
            <TextField
              id="outlined-number"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
              style={textfield}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-edit" primary="Nombre de gagnants par duels" />
          <ListItemSecondaryAction>
            <TextField
              id="outlined-number"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
              style={textfield}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List >
    );
  }
}


const mapStateToProps = (state: AppState) => ({
  bracket: state.bracket,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeMode: (edition: boolean) => dispatch(changeMode(edition), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BracketParams);

