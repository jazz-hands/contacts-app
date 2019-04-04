import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";
import Edit from '@material-ui/icons/Edit';
import './styles/ViewContact.css';
import axios from 'axios'

// const BASE_URL = 'http://localhost:5000/api/v1/contacts/'
const BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/contacts/'

class ViewContact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contact: {"id":0,"name":"","preferred_name":"","company":"","title":"","work_city":"","work_state":"","residence_city":"","residence_state":"","undergrad_school":"","undergrad_degree":"","grad_school1":"","grad_school1_degree":"","grad_school2":"","grad_school2_degree":"","work_email":"","personal_email":"","phone_number":""}
    }
    this.getContact = this.getContact.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.getContact();
  }

  // Get contact ID from params when redirected and call API to set Local contact state
  getContact(){

    axios.get(BASE_URL+'read', {
      params: {
        id: this.props.match.params.id
      }
    })
      .then(res => this.setState({
        ...this.state,
        contact: res.data
      }))
      .catch(err => console.log(err));
  }

  editProfile(){
    this.props.history.push("/edit/"+this.props.match.params.id)
  }

  render() {
    let c = this.state.contact
  return (
    <div>
      <form className='LoginForm'>
        <Paper className='LoginForm'>
          <Typography variant="h5">
          {c.name}'s Profile
          </Typography>
          <Edit onClick={this.editProfile} className="editIcon"/>
          <span className='LoginForm-fullWidth'>
          <FormControl margin="dense" className="leftInput" fullWidth>
            <InputLabel
              htmlFor="cfName"
              required
            >
              Name
            </InputLabel>
            <Input
              name="name"
              value={c.name}
              id="cfName"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl margin="dense" fullWidth>
            <InputLabel
              htmlFor="cfPreferredName"
              required
            >
              Preferred Name
            </InputLabel>
            <Input
              id="cfPreferredName"
              value={c.preferred_name}
              name="preferredName"
            />
          </FormControl>
        </span>
        <span className='LoginForm-halfWidth-left'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfCompany"
            >
              Company
            </InputLabel>
            <Input
              id="cfCompany"
              value={c.company}
              name="company"
            />
          </FormControl>
        </span>
        <span className='LoginForm-halfWidth-right'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfTitle"
            >
              Title
            </InputLabel>
            <Input
              id="cfTitle"
              value={c.title}
              name="title"
            />
          </FormControl>
        </span>
        <span className='LoginForm-halfWidth-left'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfWorkCity"
            >
              Work City
            </InputLabel>
            <Input
              id="cfWorkCity"
              value={c.work_city}
              name="workCity"
            />
          </FormControl>
        </span>
        <span className='LoginForm-halfWidth-right'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfWorkState"
            >
              Work State
            </InputLabel>
            <Input
              id="cfWorkState"
              value={c.work_state}
              name="workState"
            />
          </FormControl>
        </span>
        <span className='LoginForm-halfWidth-left'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfResidenceCity"
            >
              Residence City
            </InputLabel>
            <Input
              id="cfResidenceCity"
              value={c.residence_city}
              name="residenceCity"
            />
          </FormControl>
        </span>
        <span className='LoginForm-halfWidth-right'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfResidenceState"
            >
              Residence State
            </InputLabel>
            <Input
              id="cfResidenceState"
              value={c.residence_state}
              name="residenceState"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfSchoolUndergrad"
            >
              School (Undergradate)
            </InputLabel>
            <Input
              id="cfSchoolUndergrad"
              value={c.undergrad_school}
              name="undergradSchool"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfDegreeUndergrad"
            >
              Undergradate Degree
            </InputLabel>
            <Input
              id="cfDegreelUndergrad"
              value={c.undergrad_degree}
              name="undergradDegree"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="cfGradSchool1"
            >
              Graduate School (1)
            </InputLabel>
            <Input
              id="cfGradSchool1"
              value={c.grad_school1}
              name="gradSchool1"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="cfGradDegree1"
            >
              Graduate Degree (1)
            </InputLabel>
            <Input
              id="cfGradDegree1"
              value={c.grad_school1_degree}
              name="gradSchool1Degree"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="cfGradSchool2"
            >
              Graduate School (2)
            </InputLabel>
            <Input
              id="cfGradSchool2"
              value={c.grad_school2}
              name="gradSchool2"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="cfGradDegree2"
            >
              Graduate Degree (2)
            </InputLabel>
            <Input
              id="cfGradDegree2"
              value={c.grad_school2_degree}
              name="gradSchool2Degree"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfWorkEmail"
            >
              Work Email
            </InputLabel>
            <Input
              id="cfWorkEmail"
              value={c.work_email}
              name="workEmail"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfPersonalEmail"
            >
              Personal Email
            </InputLabel>
            <Input
              id="cfPersonalEmail"
              value={c.personal_email}
              name="personalEmail"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl required fullWidth>
            <InputLabel
              htmlFor="cfPhoneNumber"
            >
              Phone Number
            </InputLabel>
            <Input
              id="cfPhoneNumber"
              value={c.phone_number}
              name="phoneNumber"
            />
          </FormControl>
        </span>
        </Paper>
      </form>
    </div>
    );
  }
}
export default withRouter(ViewContact);
