import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './styles/ContactForm.css';

class ContactForm extends React.Component {
  render() {

  return (
    <div>
      <form className='LoginForm'>
        <Paper className='LoginForm'>
        <span className='LoginForm-fullWidth'>
          <Typography variant="h6">
            Register
          </Typography>
          <FormControl margin="dense" className="leftInput" fullWidth>
            <InputLabel
              htmlFor="cfName"
              required
            >
              Name
            </InputLabel>
            <Input
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
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="cfGradSchool1"
            >
              School (Graduate Degree 1)
            </InputLabel>
            <Input
              id="cfGradSchool1"
            />
          </FormControl>
        </span>
        <span className='LoginForm-fullWidth'>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="cfGradSchool2"
            >
              School (Graduate Degree 2)
            </InputLabel>
            <Input
              id="cfGradSchool2"
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
                Sign in
            </Button>
          </FormControl>
          <FormControl  fullWidth>
            <Link className="LoginForm-forgotPasswordLink">
              Forgot Password
            </Link>
          </FormControl>
        </span>
        </Paper>
      </form>
    </div>
    );
  }
}
export default ContactForm;
