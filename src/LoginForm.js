import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './styles/LoginForm.css';

class LoginForm extends React.Component {
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
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth={false}
                className="LoginForm-SubmitButton"
              >
                Sign in
            </Button>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Link className="LoginForm-forgotPasswordLink">
              Forgot Password
            </Link>
          </FormControl>
        </Paper>
      </form>
    </div>
    );
  }
}
export default LoginForm;
