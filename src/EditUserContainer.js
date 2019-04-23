import React from 'react';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar';
import EditUser from './EditUser';
import { withRouter } from "react-router-dom";
import './styles/SearchIndex.css';

class EditUserContainer extends React.Component {
  constructor(props){
    super(props);
    this.props.isSessionActive();
  }
  render() {

    return (
      <div className='index-container'>
        <div className='index-content-header'>
          <NavBar backMenu={true} backTitle="Back" user={this.props.user} logout={this.props.logout} authed={this.props.isLoggedIn}/>
        </div>
        <div className='index-content'>
          <EditUser />
        </div>
      </div>
    );
  }
}

export default withRouter(EditUserContainer);
