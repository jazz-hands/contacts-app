import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles/SearchBox.css';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div className="searchBox-container">
        <Paper className='searchField-container'>
          <span className='searchField-input'>
            <TextField
            id="outlined-uncontrolled"
            label="Search"
            variant="outlined"
            fullWidth
          />
          </span>
          <span className="searchField-button">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </span>
        </Paper>
      </div>
    );
  }
}

export default SearchBox;
