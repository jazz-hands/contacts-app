import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import LoginForm from './LoginForm';
import App from './App';
import RegisterContactContainer from './RegisterContactContainer';
import AddContactContainer from './AddContactContainer';
import SearchIndexContainer from './SearchIndexContainer';
import EditContactContainer from './EditContactContainer';
import ViewContactContainer from './ViewContactContainer';
import EditUserContainer from './EditUserContainer';
import ViewUserContainer from './ViewUserContainer';
import PrivateRoute from './PrivateRoute';
import './styles/Main.css';
import axios from 'axios'

let BASE_URL = ""

if (process.env.NODE_ENV !== 'production') {
  BASE_URL = 'http://localhost:5000/api/v1/user/'
} else {
  BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/user/'
}

class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoggedIn: this.isSessionActive()
    };
  this.login = this.login.bind(this);
  this.logout = this.logout.bind(this);
  this.isSessionActive = this.isSessionActive.bind(this);
  };

  isSessionActive(){
    let username = window.localStorage.getItem('username');
    let token = window.localStorage.getItem('token');
    if(token != null && username != null){
      axios({
        method: "post",
        baseURL: BASE_URL,
        url: "session/",
        data: { user: username, token: token },
        config: { headers: {"Content-Type": "multipart/form-data" }}
      }).then((res) =>{
        console.log(res.data);
        if(res.data["message"]){
          this.setState({...this.state, message: res.data["message"], isLoggedIn: false, user: {} });
          window.localStorage.clear();
          return false;
        } else {
          this.setState({...this.state, isLoggedIn: true, user: res.data["user"]});
          return true;
        }
      }).catch((e)=>{
        this.setState({...this.state, message: e, isLoggedIn: false, user: {} });
        window.localStorage.clear();
      });
    } else {
      this.setState({...this.state, message: "Invalid Session! Must log in!", isLoggedIn: false, user: {} });
      window.localStorage.clear();
      return false;
    }
  }

  logout(event){
    event.preventDefault();
    let username = window.localStorage.getItem('username');
    let token = window.localStorage.getItem('token');
    axios({
      method: "post",
      baseURL: BASE_URL,
      url: "logout/",
      data: { user: username, key: token },
      config: { headers: {"Content-Type": "multipart/form-data" }}
    }).then((res) =>{
      console.log(res.data);
      console.log("logging out");
      window.localStorage.clear();
      this.setState({ ...this.state, isLoggedIn: false, user: {} });
      return <Redirect to="/" />
    }).catch((e)=>{
      console.log(e);
      console.log("logging out catch");
      window.localStorage.clear();
      this.setState({ ...this.state, isLoggedIn: false, user: {}, message: e.data });
      return <Redirect to="/" />
    });
  }

  login(event, user){
    axios({
      method: "post",
      baseURL: BASE_URL,
      url: "login/",
      data: { user: user},
      config: { headers: {"Content-Type": "multipart/form-data" }}
    }).then((res) =>{
      console.log(res.data);
      if(res.data["message"]){
        this.setState({...this.state, message: res.data["message"]});
      } else {
        this.setState({...this.state, isLoggedIn: true, user: res.data["user"]});
        //set token in local storage
        window.localStorage.setItem('username', user.username);
        window.localStorage.setItem('token', res.data["token"]);

        return <Redirect to="/" />
      }
    }).catch((e)=>{
      this.setState({...this.state, message: e});
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className='index-container'>
      <Router>
        <div>
          <Route path="/register" component={RegisterContactContainer} />
          <PrivateRoute user={this.state.user} login={this.login} logout={this.logout} isSessionActive={this.isSessionActive} authed={this.state.isLoggedIn} path='/id/:id' component={ViewContactContainer} />
          <PrivateRoute user={this.state.user} login={this.login} logout={this.logout} isSessionActive={this.isSessionActive} authed={this.state.isLoggedIn} path='/edit/:id' component={EditContactContainer} />
          <PrivateRoute user={this.state.user} login={this.login} logout={this.logout} isSessionActive={this.isSessionActive} authed={this.state.isLoggedIn} path='/user/' component={ViewUserContainer} />
          <PrivateRoute user={this.state.user} login={this.login} logout={this.logout} isSessionActive={this.isSessionActive} authed={this.state.isLoggedIn} path='/user/edit' component={EditUserContainer} />
          <PrivateRoute user={this.state.user} login={this.login} logout={this.logout} isSessionActive={this.isSessionActive} authed={this.state.isLoggedIn} path='/add' component={AddContactContainer} />
          <PrivateRoute user={this.state.user} login={this.login} logout={this.logout} isSessionActive={this.isSessionActive} authed={this.state.isLoggedIn} exact path='/' component={SearchIndexContainer} />
        </div>
      </Router>
      </div>
    );
  }
}

export default Routing;

// <Route path="/add" component={RegisterContactContainer} />
// <Route path="/id/:id/edit" component={EditContactContainer} />
// <Route path="/id/:id" component={ViewContactContainer} />
// <Route path="/edit/:id" component={EditContactContainer} />

// <Route path="/account" component={LoginForm} />
// <Route path="/profile/{id}" component={LoginForm} />
// <Route path="/search" component={LoginForm} />

// <Route path="/" component={SearchIndexContainer} />


          // <Route exact path="/" component={SearchIndexContainer} />
