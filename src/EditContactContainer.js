import React from 'react';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar';
import EditContact from './EditContact';
import { withRouter } from "react-router-dom";
import './styles/SearchIndex.css';

class EditContactContainer extends React.Component {

  render() {

    return (
      <div className='index-container'>
        <div className='index-content-header'>
          <NavBar backMenu={true} backTitle="Back"/>
        </div>
        <div className='index-content'>
          <EditContact />
        </div>
      </div>
    );
  }
}

export default withRouter(EditContactContainer);
