import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles/SearchBox.css';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      filters: {}
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event): void {
      event.persist();
      this.setState({
        searchText: event.target.value
      });
      this.props.searchFor(event.target.value, this.state.filters);
  }

  setFilters(event){
    event.persist();
    this.setState({
      ...this.state,
      filters: {
        name: event.target.value
      }
    });
  }

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
            onChange={this.handleChange}
          />
          <span className="searchField-button">
            <Button variant="contained" color="primary" onClick = {() => this.props.searchFor(this.state.searchText, this.state.filters)}>
              Submit
            </Button>
          </span>
        </Paper>
      </div>
    );
  }
}

export default SearchBox;
