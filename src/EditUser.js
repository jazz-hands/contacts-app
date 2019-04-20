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

let BASE_URL = ""

if (process.env.NODE_ENV !== 'production') {
  BASE_URL = 'http://localhost:5000/api/v1/user/'
} else {
  BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/user/'
}

class EditUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user
    }
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.getUser();
  }

  updateUser(event){
    axios({
      method: "post",
      baseURL: BASE_URL,
      url: "update/",
      data: { id: this.props.match.params.id,
        user: this.state.user
      },
      config: { headers: {"Content-Type": "multipart/form-data" }}
    }).then((res) =>{
      console.log(res.data);
      if(res.data["message"]){
        this.setState({...this.state, message: res.data["message"]});
      } else {
        console.log('update user with data from response')
        this.setState({
          ...this.state,
          user: {
            ...this.state.user
          }
        });
      }
    }).catch((e)=>{
      this.setState({...this.state, message: e});
    });
    event.preventDefault();
  }

  deleteUser(event){
    axios({
      method: "post",
      baseURL: BASE_URL,
      url: "delete/",
      data: { id: this.props.match.params.id },
      config: { headers: {"Content-Type": "multipart/form-data" }}
    }).then((res) =>{
      console.log(res.data);
      if(res.data["message"]){
        this.setState({...this.state, message: res.data["message"]});
      } else {
        this.setState({...this.state, message: res.data["deleted"]});
        this.props.history.push("/");
      }
    }).catch((e)=>{
      this.setState({...this.state, message: e});
    });
    event.preventDefault();
  }

  render() {
    let c = this.state.contact
  return (
    <div>
      <form className='LoginForm'>
        <Paper className='LoginForm'>
        <span className='LoginForm-fullWidth'>
          <div className="Form-heading">
            <Typography variant="h6">
              Editing {c.name}'s Profile
            </Typography>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth={false}
                style={{"marginLeft": "auto"}}
                onClick={(event) => this.deleteContact(event)}
              >
                Delete
            </Button>
          </div>
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
              name="preferred_name"
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
              name="work_city"
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
              name="work_state"
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
              name="residence_city"
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
              name="residence_state"
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
              name="undergrad_school"
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
              name="undergrad_degree"
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
              name="grad_school1"
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
              name="grad_school1_degree"
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
              name="grad_school2"
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
              name="grad_school2_degree"
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
              name="work_email"
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
              name="personal_email"
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
              name="phone_number"
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
                onClick={(event) => this.updateContact(event)}
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
export default withRouter(EditUser);
