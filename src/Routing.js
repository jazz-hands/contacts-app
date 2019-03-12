import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './LoginForm';
import App from './App';
import ContactForm from './ContactForm';
import SearchIndex from './SearchIndex';

class Routing extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/index" component={SearchIndex} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={ContactForm} />
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
