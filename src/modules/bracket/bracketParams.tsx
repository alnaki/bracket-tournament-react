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

const textfield = { width: "70px", height: "30px" }

type Props = {
  bracket: BracketState;
}
class BracketParams extends Component<Props> {
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
              inputProps={{ "aria-labelledby": "switch-list-label-edit" }}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-edit" primary="Mode edition" />
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
          <ListItemText id="switch-list-label-edit" primary="Mode edition" />
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

export default connect(mapStateToProps)(BracketParams);
