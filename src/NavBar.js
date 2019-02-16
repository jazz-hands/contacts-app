import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './styles/NavBar.css';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
}

handleChange(event) {
  console.log('auth');
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
  console.log('now anchor is: '+this.state.anchorEl);
  console.log('menuLocation is:'+this.state.menuLocation.top);
}

handleClose() {
  console.log('handleClose, open is '+this.state.open );
  this.setState(state => ({
    open: false
  }));
  console.log('now open is: '+this.state.open)
}

  render() {
    //inline so it overrides theme width
    const styles = {
        title: {
          width: '97%'
        }
    };
    return (
      <div className="NavBar">
        <AppBar>
        <Toolbar className="NavBar">
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
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
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
                </div>
          )}
        </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export default NavBar;
