import React from 'react';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar';
import ViewUser from './ViewUser';
import { withRouter } from "react-router-dom";
import './styles/SearchIndex.css';

class ViewUserContainer extends React.Component {
  constructor(props){
    super(props);
    this.props.isSessionActive();
  }

  render() {
    return (
      <div className='index-container'>
        <div className='index-content-header'>
          <NavBar backMenu={true} backTitle="Back" user={this.props.user} logout={this.props.logout} authed={this.props.isLoggedIn} />
        </div>
        <div className='index-content'>
          <ViewUser user={this.props.user} />
        </div>
      </div>
    );
  }
}

export default withRouter(ViewUserContainer);
