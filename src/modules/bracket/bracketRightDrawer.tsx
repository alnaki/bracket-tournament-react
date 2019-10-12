import React, { Component } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: drawerWidth
    },
    title: {
      flexGrow: 1
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-start"
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    },
    textField: {
      width: "70px",
      height: "30px"
    }
  })
);

const styleIcon = {
  position: "absolute",
  top: "10px",
  right: "10px"
};

const theme = useTheme();
const classes = useStyles(theme);
const [open, setOpen] = React.useState(false);

export default class BracketRightDrawer extends Component {


  handleDrawerOpen = () => {
    setOpen(true);
  };

  handleDrawerClose = () => {
    setOpen(false);
  };


  render() {
    return (
      <div className={classes.root}>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={this.handleDrawerOpen}
            className={clsx(open && classes.hide)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px"
            }}
          >
            <MenuIcon />
          </IconButton>
          {this.props.children}
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                  <ChevronRightIcon />
                )}
            </IconButton>
            <h3>Params</h3>
          </div>
          <Divider />
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
                  className={classes.textField}
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
                  className={classes.textField}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}