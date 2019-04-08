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

let BASE_URL = ""

if (process.env.NODE_ENV !== 'production') {
  BASE_URL = 'http://localhost:5000/api/v1/'
} else {
  BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/'
}


class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user:{
        username: '',
        password: ''
      }
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(event){
    axios.post( BASE_URL+"user/login/", {
      user: this.state.user
      },
      { headers: {"Content-Type": "multipart/form-data" }}
    )
    .then((res) =>{
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    });
    event.preventDefault();
    // axios({
    //   method: 'post',
    //   baseURL: BASE_URL,
    //   url: 'user/login/',
    //   data: {
    //     user: this.state.user
    //   },
    //   config: { headers: {'Content-Type': 'multipart/form-data' }}
    // }).then((res) =>{
    //   console.log(res);
    // }).catch((e)=>{
    //   console.log(e);
    // });
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
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth={false}
                className="LoginForm-SubmitButton"
                onClick={(event) => this.login(event)}
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
