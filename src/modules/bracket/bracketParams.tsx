import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { IBracket } from "../../config/model";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { changeName, changeMode, changeNbTeamMaxByDuel, changeNbTeamWinner } from "../../store/bracket/actions";
import EditIcon from "@material-ui/icons/Edit";
import GroupIcon from '@material-ui/icons/Group';
import TitleIcon from '@material-ui/icons/Title';


const textfield = { width: "40px", height: "30px" }

type Props = {
  bracket: IBracket;
  changeName: (arg0: string) => void;
  changeMode: (arg0: boolean) => void;
  changeNbTeamMaxByDuel: (arg0: number) => void;
  changeNbTeamWinner: (arg0: number) => void;
}
class BracketParams extends Component<Props> {
  handleChangeName(input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.props.changeName(input.target.value);
  }
  handleChangeMode(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeMode(event.target.checked);
  }
  handleChangeNbMaxPlayerByDuel(input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.props.changeNbTeamMaxByDuel(Number(input.target.value));
  }
  handleChangeNbWinner(input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.props.changeNbTeamWinner(Number(input.target.value));
  }

  render() {
    return (
      <List>
        <ListItem>
          <ListItemIcon>
            <TitleIcon />
          </ListItemIcon>
          <ListItemText>
            <TextField
              label="Name"
              value={this.props.bracket.name}
              onChange={e => this.handleChangeName(e)}
              variant="standard"
              margin="normal"
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-edit" primary="Mode edition" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              checked={this.props.bracket.editionMode}
              onChange={e => this.handleChangeMode(e)}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-edit" primary="Nombre de team max par duels" />
          <ListItemSecondaryAction>
            <TextField
              type="number"
              value={this.props.bracket.nbTeamMaxByDuel}
              onChange={e => this.handleChangeNbMaxPlayerByDuel(e)}
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
            <GroupIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-edit" primary="Nombre de gagnants par duels" />
          <ListItemSecondaryAction>
            <TextField
              type="number"
              value={this.props.bracket.nbTeamWinner}
              onChange={e => this.handleChangeNbWinner(e)}
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
  changeName: (name: string) => dispatch(changeName(name), dispatch),
  changeMode: (edition: boolean) => dispatch(changeMode(edition), dispatch),
  changeNbTeamMaxByDuel: (nb: number) => dispatch(changeNbTeamMaxByDuel(nb), dispatch),
  changeNbTeamWinner: (nb: number) => dispatch(changeNbTeamWinner(nb), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BracketParams);

