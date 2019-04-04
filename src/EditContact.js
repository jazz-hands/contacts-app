import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './styles/ContactForm.css';
import { withRouter } from "react-router-dom";
import axios from 'axios'

// const BASE_URL = 'http://localhost:5000/api/v1/contacts/'
const BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/contacts/'

class EditContact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contact: {"id":0,"name":"","preferred_name":"","company":"","title":"","work_city":"","work_state":"","residence_city":"","residence_state":"","undergrad_school":"","undergrad_degree":"","grad_school1":"","grad_school1_degree":"","grad_school2":"","grad_school2_degree":"","work_email":"","personal_email":"","phone_number":""}
    }
    this.getContact = this.getContact.bind(this);
    this.getContact();
  }

  // Get contact ID from params when redirected and call API to set Local contact state
  getContact(){
    const params = {
      id: this.props.match.params.id
    }
    axios.get(BASE_URL+'read', {params})
      .then(res => this.setState({
        ...this.state,
        contact: res.data
      }))
      .catch(err => console.log(err));
  }

  setLocalContact(event){
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
    let c = this.state.contact
  return (
    <div>
      <form className='LoginForm'>
        <Paper className='LoginForm'>
        <span className='LoginForm-fullWidth'>
          <Typography variant="h6">
            Editing {c.name}'s Profile
          </Typography>
          <FormControl margin="dense" className="leftInput" fullWidth>
            <InputLabel
              htmlFor="cfName"
              required
            >
              Name
            </InputLabel>
            <Input
              name="name"
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
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
              onChange={(event) => this.setLocalContact(event)}
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth-submit'>
          <FormControl fullWidth>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth={false}
                className="LoginForm-SubmitButton"
              >
                Save
            </Button>
          </FormControl>
          <FormControl  fullWidth>
            <Link className="LoginForm-forgotPasswordLink">
              Cancel
            </Link>
          </FormControl>
        </span>
        </Paper>
      </form>
    </div>
    );
  }
}
export default withRouter(EditContact);
