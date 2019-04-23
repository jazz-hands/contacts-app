import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './styles/NavBar.css';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withRouter, Redirect } from "react-router-dom";

class NavBar extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    open: false,
    auth: true,
    anchorEl: null,
    menuLocation: {}
  };
  this.handleMenu = this.handleMenu.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleClose = this.handleClose.bind(this);
  this.back = this.back.bind(this);
}

handleChange(event) {
  console.log('auth');
}

back(){
  this.props.history.goBack();
}

handleMenu(event) {
  let rect = event.currentTarget.getBoundingClientRect();
  let target = event.currentTarget;
  let top = (rect.height+rect.top)-(target.offsetTop);
  let element = event.currentTarget;
  this.setState(state => ({
    open: !this.state.open,
    anchorEl: element,
    menuLocation: {
      top: top+`px`
    }
  }));
}

handleClose(event) {
  event.preventDefault();
  console.log('handleClose, open is '+this.state.open );
  this.setState(state => ({
    open: false
  }));
  switch (event.target.innerText) {
    case "Contact Profile":
      console.log("going to contact Profile")
      var id = "/id/"+this.props.user.contact_id
      this.props.history.push(id);
      break;
    case "User Account":
      console.log("going to user account")
      this.props.history.push("/user");
      break;
    case "Logout":
      console.log("log out!");
      this.props.logout(event);
      break;
    default:
    console.log("no matching links!")
      // Create error modal for broken links
  }
}

  render() {
    //inline so it overrides theme width
    const styles = {
        title: {
          width: '97%'
        }
    };

    if (this.props.backMenu) {
      return (
        <div className="NavBar">
          <AppBar>
          <Toolbar className="NavBar">
            <IconButton color="inherit" aria-label="Menu" onClick={this.back}>
            <KeyboardArrowLeft />
              <Typography variant="h6" color="inherit" style={styles.title}>
                {this.props.backTitle}
              </Typography>
            </IconButton>
            <Typography variant="h6" color="inherit" style={styles.title}>
              {this.props.title}
            </Typography>
            {this.state.auth && (
              <div>
                <IconButton
                  aria-owns={this.state.open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountCircle />
                </IconButton>
                  <Menu
                    style={this.state.menuLocation}
                    id="menu-appbar"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={(event) => this.handleClose(event)}
                  >
                    <MenuItem onClick={(event) => this.handleClose(event)}>Contact Profile</MenuItem>
                    <MenuItem onClick={(event) => this.handleClose(event)}>User Account</MenuItem>
                    <MenuItem onClick={(event) => this.handleClose(event)}>Logout</MenuItem>
                  </Menu>
                  </div>
            )}
          </Toolbar>
          </AppBar>
        </div>
      );
    } else {
      return(
        <div className="NavBar">
          <AppBar>
          <Toolbar className="NavBar">
            <Typography variant="h6" color="inherit" style={styles.title}>
              {this.props.title}
            </Typography>
            {this.state.auth && (
              <div>
                <IconButton
                  aria-owns={this.state.open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountCircle />
                </IconButton>
                  <Menu
                    style={this.state.menuLocation}
                    id="menu-appbar"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={(event) => this.handleClose(event)}
                  >
                  <MenuItem onClick={(event) => this.handleClose(event)}>Contact Profile</MenuItem>
                  <MenuItem onClick={(event) => this.handleClose(event)}>User Account</MenuItem>
                  <MenuItem onClick={(event) => this.handleClose(event)}>Logout</MenuItem>
                  </Menu>
                  </div>
            )}
          </Toolbar>
          </AppBar>
        </div>
      );
    }
  }

}

export default withRouter(NavBar);
