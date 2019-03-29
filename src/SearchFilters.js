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

  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      options: {
        firstName: {
          isSelected: false,
          name: 'First Name'
        },
        lastName: {
          isSelected: false,
          name: 'Last Name'
        },
        school: {
          isSelected: false,
          name: 'School'
        }
      },
      filters: {
        0: {
          value: '',
          name: ''
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.setFilters = this.setFilters.bind(this);
    this.currentFilter = this.currentFilter.bind(this);
  };

  handleChange(event): void {
      event.persist();
      this.setState({
        searchText: event.target.value
      });
      this.props.searchFor(event.target.value, this.state.options);
  }

  setFilters(event): void {
    var value = event.target.value;
    var name = event.target.name;
    var oldOption = this.state.filters[name].value;
    var next = Object.keys(this.state.filters).length
    event.persist();

    //unselect filter if another has already been chosen
    if(this.state.filters[name].name != ""){
      if(this.state.options[oldOption].isSelected){
        this.setState({
          ...this.state,
          options: {
            ...this.state.options,
            [oldOption]: {
              ...this.state.options[oldOption],
              isSelected: false
            },
            [value]: {
              ...this.state.options[value],
              isSelected: true
            }
          },
          filters: {
            ...this.state.filters,
            [name]: {
              value: event.target.value,
              name: event.target.name
            }
          }
        });
      }
    } else {
      this.setState({
        ...this.state,
        options: {
          ...this.state.options,
          [value]: {
            ...this.state.options[value],
            isSelected: true
          }
        },
        filters: {
          ...this.state.filters,
          [name]: {
            value: event.target.value,
            name: event.target.name
          }
        }
      });
    }

  }

  currentFilter(index, value){
    var filters = this.state.filters;
    if(filters[index]){
      return filters[index]['value']
    }
    else {
      return false
    }
  }

  render() {
    var options = this.state.options;
    var filters = this.state.filters;
    return (
      <div>
      {
        Object.keys(filters).map((filter, fIndex) => {
          return(
            <div>
              <Select
                onChange={this.setFilters}
                input={
                  <OutlinedInput
                    autoWidth='true'
                    name={filter}
                    id="outlined-age-simple"
                    value={filters[fIndex]['value']}
                  />}
              >
              {
                Object.keys(options).map((filter, index) => {
                  if(!options[filter].isSelected || filter == filters[fIndex]['value']){
                    return(
                      <MenuItem key={"filter"+index} value={filter}>{options[filter]['name']}</MenuItem>
                    )
                  }
                })
              }
              </Select>
              <TextField
                ref="filter.name-searchField"
                id="outlined-uncontrolled"
                label=""
                variant="outlined"
                className='searchField-input'
                onChange={this.handleChange}
              />
            </div>
          )
          })
      }
      </div>
    );
  }
}

export default SearchFilter;
