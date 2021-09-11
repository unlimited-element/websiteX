import React, { Component, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const styles = theme => ({
  drawerWidth: {
    width: "auto"
  },
  drawerAlign: {
    textAlign: "center"
  },
  headerwidth: {
    width: "100%",
    padding: 0,
    margin: 0,
    float: "left",
  }
});

class Header extends Component {
  state = {
    open: false
  };
  handleMenubutton = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar
          className="header-color"
          position="static"
          classes={{ positionStatic: classes.headerwidth }}
        >
          <Toolbar>
            <Hidden mdUp>
              <IconButton color="inherit" onClick={this.handleMenubutton}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Button
                href="#about"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                About
              </Button>
              <Button
                href="#projects"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                Projects
              </Button>
              <Button
                href="#skills"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                Skills
              </Button>

              <Button
                href="#achievements"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                Achievements
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Hidden mdUp>
          <div>
            <Drawer
              anchor="top"
              open={this.state.open}
              classes={{ paperAnchorTop: classes.drawerAlign }}
              style={{ color: "yellow" }}
            >
              <div className={classes.drawerWidth}>
                <IconButton onClick={this.handleMenubutton}>
                  <KeyboardArrowUpIcon />
                </IconButton>

                <List>
                  {[
                    "about",
                    "projects",
                    "skills",
                    "achievements"
                  ].map((text, index) => (
                    <ListItem button key={index} className="menu_btn">
                      <Button href={`#${text}`} onClick={this.handleMenubutton}>
                        <ListItemText primary={text} />
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </div>
        </Hidden>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);
