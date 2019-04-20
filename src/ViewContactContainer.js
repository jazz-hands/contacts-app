import React from 'react';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar';
import ViewContact from './ViewContact';
import { withRouter } from "react-router-dom";
import './styles/SearchIndex.css';

class ViewContactContainer extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className='index-container'>
        <div className='index-content-header'>
          <NavBar backMenu={true} backTitle="Search" user={this.props.user} logout={this.props.logout} authed={this.props.isLoggedIn} />
        </div>
        <div className='index-content'>
          <ViewContact/>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewContactContainer);
