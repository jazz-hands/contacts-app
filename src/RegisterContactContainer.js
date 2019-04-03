import React from 'react';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar';
import ContactForm from './ContactForm';
import { withRouter } from "react-router-dom";
import './styles/SearchIndex.css';

class RegisterContactContainer extends React.Component {

  render() {

    return (
      <div className='index-container'>
        <div className='index-content-header'>
          <NavBar />
        </div>
        <div className='index-content'>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterContactContainer);
