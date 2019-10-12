import React, { Component } from "react";
import clsx from "clsx";
import {
    makeStyles,
    useTheme,
    Theme,
    createStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TeamList from "../team/teamList";
import TeamListRanking from "../team/teamListRanking";
import { connect } from "react-redux";
import { AppState } from "../../store";

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

const theme = useTheme();
const classes = useStyles();
const [open, setOpen] = React.useState(false);
type Props = {
    edition: boolean;
};
class BracketLeftDrawer extends Component<Props> {
    handleDrawerOpen() {
        setOpen(true);
    };
    handleDrawerClose() {
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
                    >
                        <MenuIcon />
                    </IconButton>
                </main>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
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
                        <h3>Teams</h3>
                    </div>
                    <Divider />
                    {this.props.edition ? (
                        <TeamList />
                    ) : (
                            <TeamListRanking />
                        )}
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    edition: state.bracket.edition
});

export default connect(
    mapStateToProps
)(BracketLeftDrawer);
