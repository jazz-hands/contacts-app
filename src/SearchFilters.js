import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles/SearchFilters.css';

class SearchFilter extends React.Component {

  render() {
    var options = this.props.options;
    var filters = this.props.filters;

    return (
      <div>
      {
        Object.keys(filters).map((filter, index) => {
          return(
            <div className="searchFilters">
              <Select
                key={"filter"+index}
                className="searchFilter"
                onChange={this.props.setFilters}
                input={
                  <OutlinedInput
                    name={filter}
                    id="outlined-age-simple"
                    value={filters[index]['name']}
                    labelWidth={0}
                  />}
              >
              {
                Object.keys(options).map((option, optionIndex) => {
                  if(!options[option].isSelected || option == filters[index]['name']){
                    return(
                      <MenuItem key={"filterOption"+optionIndex} value={option}>{options[option]['label']}</MenuItem>
                    )
                  }
                })
              }
              </Select>
              <div className="searchFilter-input">
                <TextField
                  key={"filterText"+index}
                  ref="filter.name-searchField"
                  id="outlined-uncontrolled"
                  label=""
                  variant="outlined"
                  fullWidth
                  onChange={this.props.setFilterSearchText}
                  name={filter}
                  value={this.props.filters[index].value}
                />
              </div>
              <div className="filterButton">
                <Button key={"filterAdd"+index} name={index} variant="contained" color="primary" className="filterAdd" onClick = {(event) => this.props.addFilter(event)}>
                  +
                </Button>
              </div>
              <div className="filterButton">
                <Button key={"filterRemove"+index} name={index} variant="contained" color="inherit" className="filterAdd" onClick = {(event) => this.props.removeFilter(event)}>
                  -
                </Button>
              </div>
            </div>
          //End return of filters.map()
          )
        })
      }
      </div>
    );
  }
}

export default SearchFilter;
