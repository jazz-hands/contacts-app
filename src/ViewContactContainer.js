import React from 'react';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar';
import ViewContact from './ViewContact';
import { withRouter } from "react-router-dom";
import './styles/SearchIndex.css';

class ViewContactContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: this.props.match.params.id
    }
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(id){
    this.setState({
      current: id
    });
  }

  render() {
    return (
      <div className='index-container'>
        <div className='index-content-header'>
          <NavBar backMenu={true} backTitle="Search" setCurrent={this.setCurrent} user={this.props.user} logout={this.props.logout} authed={this.props.isLoggedIn} />
        </div>
        <div className='index-content'>
          <ViewContact current={this.state.current} />
        </div>
      </div>
    );
  }
}

export default withRouter(ViewContactContainer);
