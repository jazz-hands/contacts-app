import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import { withRouter } from "react-router-dom";
import './styles/ContactForm.css';



class UserForm extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    let c = this.props.user
  return (
    <div>
      <form className='LoginForm'>
        <Paper className='UserForm'>
        <span className='LoginForm-fullWidth'>
          <Typography variant="h6">
            Create a User
          </Typography>
          <FormControl margin="dense" className="leftInput" fullWidth>
            <InputLabel
              htmlFor="cfName"
              required
            >
              Username
            </InputLabel>
            <Input
              name="username"
              onChange={(event) => this.props.setUser(event)}
              value={c.username}
              id="cfName"
            />
          </FormControl>
        </span>
        <span className='UserForm-halfWidth-right'>
          <FormControl margin="dense" fullWidth>
            <InputLabel
              htmlFor="cfPreferredName"
              required
            >
              Password
            </InputLabel>
            <Input
              id="cfPassword"
              value={c.password}
              name="password"
              onChange={(event) => this.props.setUser(event)}
            />
          </FormControl>
        </span>
        <span className='LoginForm-halfWidth-left'>
          <FormControl margin="dense" required fullWidth>
            <InputLabel
              htmlFor="cfCompany"
            >
              Confirm Password
            </InputLabel>
            <Input
              id="cfPasswordConfirm"
              value={c.password_confirm}
              name="password_confirm"
              onChange={(event) => this.props.setUser(event)}
            />
          </FormControl>
        </span>
        </Paper>
      </form>
    </div>
    );
  }
}
export default withRouter(UserForm);
