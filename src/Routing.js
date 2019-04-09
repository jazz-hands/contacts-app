import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import LoginForm from './LoginForm';
import App from './App';
import RegisterContactContainer from './RegisterContactContainer';
import AddContactContainer from './AddContactContainer';
import SearchIndexContainer from './SearchIndexContainer';
import EditContactContainer from './EditContactContainer';
import EditContact from './EditContact';
import ViewContactContainer from './ViewContactContainer';
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
      isLoggedIn: this.isSessionActive(),
      session: {}
    };
  this.login = this.login.bind(this);
  };

  isSessionActive(){
    return false
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
        this.setState({...this.state, isLoggedIn: true, session: res.data["token"]});
        //set token in local storage

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
          <PrivateRoute login={this.login} authed={this.state.isLoggedIn} path='/id/:id/edit' component={EditContactContainer} />
          <PrivateRoute login={this.login} authed={this.state.isLoggedIn} path='/id/:id' component={ViewContactContainer} />
          <PrivateRoute login={this.login} authed={this.state.isLoggedIn} path='/edit/:id' component={EditContactContainer} />
          <PrivateRoute login={this.login} authed={this.state.isLoggedIn} path='/add' component={AddContactContainer} />
          <PrivateRoute login={this.login} authed={this.state.isLoggedIn} exact path='/' component={SearchIndexContainer} />
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
