import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";
import Edit from '@material-ui/icons/Edit';
import './styles/UserForm.css';
import axios from 'axios'

let BASE_URL = ""

if (process.env.NODE_ENV !== 'production') {
  BASE_URL = 'http://localhost:5000/api/v1/contacts/'
} else {
  BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/contacts/'
}

class ViewUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      password: {},
      username: {}
    }
    this.onChange = this.onChange.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
  }

  onChange(event){
    console.log("logging stuff");
  }

  changePassword(event){
    console.log("Change Password");

  }

  changeUsername(event){
    console.log("Change Username");

  }

  deleteProfile(event){
    console.log("Delete Profile!");

  }

  render() {
    let c = this.state.user
  return (
    <div>
      <form className='UserForm'>
        <Paper className='UserForm'>
          <span className="Heading">
            User Account
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth={false}
                className="DeleteAccount"
                onClick={(event) => this.deleteProfile(event)}
              >
                Delete Account
            </Button>
          </span>
          <span className='UserForm-fullWidth'>
            <Paper className="RightCol">
              <div className="ChangeUsername">
                <Typography variant="h5">
                Change Username
                </Typography>
                <span className="Username">
                  Current: {c.username}
                </span>
                <FormControl margin="dense" className="leftInput" fullWidth>
                  <InputLabel
                    htmlFor="ufUsername"
                  >
                    New Username
                  </InputLabel>
                  <Input
                    name="username"
                    id="ufUsername"
                  />
                  </FormControl>
                <FormControl margin="dense" className="leftInput" fullWidth>
                  <InputLabel
                    htmlFor="ufPassword"
                  >
                    Password
                  </InputLabel>
                  <Input
                    name="password"
                    id="ufPassword"
                  />
                  </FormControl>
                  <span className="ChangeButtonsBox">
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth={false}
                      className="ChangeButtons"
                    > Change Username </Button>
                  </span>
              </div>
            </Paper>

            <Paper className='ChangePassword'>
              <Typography variant="h5">
              Change Password
              </Typography>
              <FormControl margin="dense" className="leftInput" fullWidth>
                <InputLabel
                  htmlFor="ufPassword"
                >
                  Old Password
                </InputLabel>
                <Input
                  name="password"
                  id="ufPassword"
                />
                </FormControl>
                <FormControl margin="dense" className="leftInput" fullWidth>
                <InputLabel
                  htmlFor="ufNewPassword"
                >
                  New Password
                </InputLabel>
              <Input
                name="new_password"
                id="ufNewPassword"
              />
              </FormControl>
              <FormControl margin="dense" className="leftInput" fullWidth>
              <InputLabel
                htmlFor="cfPersonalEmail"
              >
                Confirm Password
              </InputLabel>
              <Input
                name="password_confirm"
                id="ufpassword_confirm"
              />
              </FormControl>
              <span className="ChangeButtonsBox">
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth={false}
                  className="ChangeButtons"
                > Change Password </Button>
              </span>
            </Paper>

        </span>
        </Paper>
      </form>
    </div>
    );
  }
}
export default withRouter(ViewUser);
