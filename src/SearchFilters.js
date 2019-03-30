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
          name: '',
          value: ''
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.setFilters = this.setFilters.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.setFilterSearchText = this.setFilterSearchText.bind(this);
  };

  handleChange(event): void {
    debugger;
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
              ...this.state.filters[index],
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
            ...this.state.filters[index],
            name: event.target.value,
            index: event.target.name
          }
        }
      });
    }

  }

  setFilterSearchText(event): void {
    event.persist();
    var index = event.target.name;
    this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        [index]: {
          ...this.state.filters[index],
          value: event.target.value
        }
      }
    })
  }

  addFilter(event): void {
    var newFilters = {};
    var targetHit = false;
    if(Object.keys(this.state.filters).length >= Object.keys(this.state.options).length){
      console.log("no more options");
      //pass error to user
    } else {
      Object.keys(this.state.filters).map((filter, index) => {
        if(targetHit){
          newFilters[index+1] = this.state.filters[index];
        } else {
          if(index.toString() == event.currentTarget.name){
            targetHit=true;
            newFilters[index] = this.state.filters[index];
            newFilters[index+1] = {
              index: '',
              name: '',
              value: ''
            }
          } else {
            newFilters[index] = this.state.filters[index];
          }
        }
        return(console.log("mapped"));
      });

      this.setState({
        ...this.state,
        filters: newFilters
      });
    }
  }

  removeFilter(event): void {
    let index = parseInt(event.currentTarget.name);
    let oldFilters = this.state.filters;
    var newFilters = {};
    var current = this.state.filters[index].name;
    if(Object.keys(this.state.filters).length == 1){
      if(this.state.options[current] != null){
        this.setState({
          ...this.state,
          options: {
            ...this.state.options,
            [current]: {
              ...this.state.options[current],
              isSelected: false
            }
          },
          filters: {
            0: {
              index: '',
              name: '',
              value: ''
            }
          }
        });
      } else {
        console.log("error");
      }
      //pass error up to process modal?
    } else {
      //unselect filter if one was selected
      if(this.state.options[current] != null){
        this.setState({
          ...this.state,
          options: {
            ...this.state.options,
            [current]: {
              ...this.state.options[current],
              isSelected: false
            }
          }
        });
        this.state.options[this.state.filters[index].name].isSelected = false;
      }

      //remove filter from old object
      delete oldFilters[index];

      //create new object with new indices
      Object.keys(oldFilters).map((filter, index) => {
        newFilters[index] = oldFilters[filter];
      });

      //set state with new object
      this.setState({
        ...this.state,
        filters: newFilters
      });
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
            <div className="searchFilters">
              <Select
                key={"filter"+index}
                className="searchFilter"
                onChange={this.setFilters}
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
                  onChange={this.setFilterSearchText}
                  name={filter}
                />
              </div>
              <div className="filterButton">
                <Button key={"filterAdd"+index} name={index} variant="contained" color="primary" className="filterAdd" onClick = {(event) => this.addFilter(event)}>
                  +
                </Button>
              </div>
              <div className="filterButton">
                <Button key={"filterRemove"+index} name={index} variant="contained" color="inherit" className="filterAdd" onClick = {(event) => this.removeFilter(event)}>
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
