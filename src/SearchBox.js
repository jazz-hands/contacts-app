import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles/SearchBox.css';

class SearchBox extends React.Component {

  render() {
    return (
      <div >
        <Paper className='searchField-container'>
            <TextField
            ref="searchText"
            id="outlined-uncontrolled"
            label="Search"
            variant="outlined"
            className='searchField-input'
            onChange={(event) => this.props.handleChange(event)}
            value={this.props.searchText}
          />
          <span className="searchField-button">
            <Button variant="contained" color="primary" onClick = {() => this.props.searchFor(this.props.searchText, this.props.filters)}>
              Submit
            </Button>
          </span>
        </Paper>
      </div>
    );
  }
}

export default SearchBox;
