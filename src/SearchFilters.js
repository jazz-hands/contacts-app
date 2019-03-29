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
          label: 'First Name'
        },
        lastName: {
          isSelected: false,
          label: 'Last Name'
        },
        school: {
          isSelected: false,
          label: 'School'
        }
      },
      filters: {
        0: {
          index: '',
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
    var name = event.target.value;
    var index = event.target.name;
    var oldOption = this.state.filters[index].name;
    var next = Object.keys(this.state.filters).length
    event.persist();

    //unselect filter if another has already been chosen
    if(this.state.filters[index].index != ""){
      if(this.state.options[oldOption].isSelected){
        this.setState({
          ...this.state,
          options: {
            ...this.state.options,
            [oldOption]: {
              ...this.state.options[oldOption],
              isSelected: false
            },
            [name]: {
              ...this.state.options[name],
              isSelected: true
            }
          },
          filters: {
            ...this.state.filters,
            [index]: {
              name: event.target.value,
              index: event.target.name
            }
          }
        });
      }
    } else {
      this.setState({
        ...this.state,
        options: {
          ...this.state.options,
          [name]: {
            ...this.state.options[name],
            isSelected: true
          }
        },
        filters: {
          ...this.state.filters,
          [index]: {
            name: event.target.value,
            index: event.target.name
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
        Object.keys(filters).map((filter, index) => {
          return(
            <div>
              <Select
                onChange={this.setFilters}
                input={
                  <OutlinedInput
                    autoWidth='true'
                    name={filter}
                    id="outlined-age-simple"
                    value={filters[index]['name']}
                  />}
              >
              {
                Object.keys(options).map(option => {
                  if(!options[option].isSelected || option == filters[index]['name']){
                    return(
                      <MenuItem key={"filter"+index} value={option}>{options[option]['label']}</MenuItem>
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
