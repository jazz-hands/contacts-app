import React from 'react';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar';
import ContactForm from './ContactForm';
import { withRouter } from "react-router-dom";
import axios from 'axios'
import './styles/SearchIndex.css';

let BASE_URL = ""

if (process.env.NODE_ENV !== 'production') {
  BASE_URL = 'http://localhost:5000/api/v1/contacts/'
} else {
  BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/contacts/'
}

class AddContactContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contact: {"id":0,"name":"","preferred_name":"","company":"","title":"","work_city":"","work_state":"","residence_city":"","residence_state":"","undergrad_school":"","undergrad_degree":"","grad_school1":"","grad_school1_degree":"","grad_school2":"","grad_school2_degree":"","work_email":"","personal_email":"","phone_number":""}
    }
    this.createContact = this.createContact.bind(this);
    this.setContact = this.setContact.bind(this);
    props.history.push('/add');
  }

  createContact(event){
    axios({
      method: "post",
      baseURL: BASE_URL,
      url: "create/",
      data: { contact: this.state.contact},
      config: { headers: {"Content-Type": "multipart/form-data" }}
    }).then((res) =>{
      console.log(res.data);
      if(res.data["message"]){
        this.setState({...this.state, message: res.data["message"]});
      } else {
        this.props.history.push("/id/"+res.data.id);
      }
    }).catch((e)=>{
      this.setState({...this.state, message: e});
    });
    event.preventDefault();
  }

  setContact(event){
    let key = event.target.name
    event.persist();
    this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        [key]: event.currentTarget.value
      }
    })
  }

  render() {

    return (
      <div className='index-container'>
        <div className='index-content-header'>
          <NavBar />
        </div>
        <div className='index-content'>
          <ContactForm contact={this.state.contact} createContact={this.createContact} setContact={this.setContact}/>
        </div>
      </div>
    );
  }
}

export default withRouter(AddContactContainer);
