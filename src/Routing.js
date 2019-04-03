import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './LoginForm';
import App from './App';
import RegisterContactContainer from './RegisterContactContainer';
import SearchIndexContainer from './SearchIndexContainer';
import EditContactContainer from './EditContactContainer';
import EditContact from './EditContact';
import ViewContactContainer from './ViewContactContainer';
import './styles/Main.css';

class Routing extends Component {
  constructor(props) {
    super(props);
  };


  render() {
    return (
      <div className='index-container'>
      <Router>
        <div>
        <Route path="/login" component={LoginForm} />
          <Route exact path="/" component={SearchIndexContainer} />
          <Route path="/register" component={RegisterContactContainer} />
          <Route path="/add" component={RegisterContactContainer} />
          <Route path="/id/:id" component={ViewContactContainer} />
          <Route path="/id/:id/edit" component={EditContactContainer} />
          <Route path="/edit/:id" component={EditContactContainer} />
        </div>
      </Router>
      </div>
    );
  }
}

export default Routing;

// <Route path="/account" component={LoginForm} />
// <Route path="/profile/{id}" component={LoginForm} />
// <Route path="/search" component={LoginForm} />
