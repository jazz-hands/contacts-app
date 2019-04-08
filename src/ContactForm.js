import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import { withRouter } from "react-router-dom";
import './styles/ContactForm.css';



class ContactForm extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    let c = this.props.contact
  return (
    <div>
      <form className='LoginForm'>
        <Paper className='LoginForm'>
        <span className='LoginForm-fullWidth'>
          <Typography variant="h6">
            Create a Profile
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
              onChange={(event) => this.props.setContact(event)}
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
              name="preferred_name"
              onChange={(event) => this.props.setContact(event)}
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
              onChange={(event) => this.props.setContact(event)}
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
              onChange={(event) => this.props.setContact(event)}
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
              name="work_city"
              onChange={(event) => this.props.setContact(event)}
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
              name="work_state"
              onChange={(event) => this.props.setContact(event)}
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
              name="residence_city"
              onChange={(event) => this.props.setContact(event)}
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
              name="residence_state"
              onChange={(event) => this.props.setContact(event)}
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
              name="undergrad_school"
              onChange={(event) => this.props.setContact(event)}
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
              name="undergrad_degree"
              onChange={(event) => this.props.setContact(event)}
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
              name="grad_school1"
              onChange={(event) => this.props.setContact(event)}
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
              name="grad_school1_degree"
              onChange={(event) => this.props.setContact(event)}
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
              name="grad_school2"
              onChange={(event) => this.props.setContact(event)}
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
              name="grad_school2_degree"
              onChange={(event) => this.props.setContact(event)}
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
              name="work_email"
              onChange={(event) => this.props.setContact(event)}
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
              name="personal_email"
              onChange={(event) => this.props.setContact(event)}
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
              name="phone_number"
              onChange={(event) => this.props.setContact(event)}
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
                onClick={(event) => this.props.createContact(event)}
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
export default withRouter(ContactForm);
