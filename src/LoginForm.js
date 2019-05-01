import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './styles/LoginForm.css';
import axios from 'axios'
import { withRouter } from "react-router-dom";

let BASE_URL = ""

// if (process.env.NODE_ENV !== 'production') {
//   BASE_URL = 'http://localhost:5000/api/v1/'
// } else {
//   BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/'
// }
BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/'


class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user:{
        username: '',
        password: ''
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    let key = event.target.name
    event.persist();
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [key]: event.currentTarget.value
      }
    })
  }

  render() {
  return (
    <div>
      <form className='LoginForm'>
        <Paper className='LoginForm'>
          <Typography variant="h6">
            Login to Contacts Application
          </Typography>
          <FormControl margin="normal" required fullWidth>
            <InputLabel
              htmlFor="loginFormUsernameInput"
            >
              Username
            </InputLabel>
            <Input
              name='username'
              value={this.state.user.username}
              onChange={(event) => this.onChange(event)}
              id="loginFormUsernameInput"
            />
          </FormControl>
          <FormControl margin="normal"required fullWidth>
            <InputLabel
              htmlFor="loginFormPasswordInput"
            >
              Password
            </InputLabel>
            <Input
              id="loginFormPasswordInput"
              name='password'
              value={this.state.user.password}
              onChange={(event) => this.onChange(event)}
              type="password"
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth={false}
                className="LoginForm-SubmitButton"
                onClick={(event) => this.props.login(event, this.state.user)}
              >
                Sign in
            </Button>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Link className="LoginForm-forgotPasswordLink" onClick={() => this.props.history.push('register/')}>
              Register
            </Link>
          </FormControl>
        </Paper>
      </form>
    </div>
    );
  }
}
export default withRouter(LoginForm);
