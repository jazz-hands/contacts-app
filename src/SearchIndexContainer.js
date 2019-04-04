import React from 'react';
import Paper from '@material-ui/core/Paper';
import './styles/SearchIndex.css';
import IndexTable from './IndexTable';
import SearchBox from './SearchBox';
import SearchFilters from './SearchFilters';
import NavBar from './NavBar';
import { withRouter } from "react-router-dom";
import axios from 'axios'

// const BASE_URL = 'http://localhost:5000/api/v1/contacts/'
 const BASE_URL = 'https://jasmine-contacts-api.herokuapp.com/api/v1/contacts/'

class SearchIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      options: {
        company: {
          isSelected: false,
          label: 'Company'
        },
        city: {
          isSelected: false,
          label: 'City'
        },
        state: {
          isSelected: false,
          label: 'State'
        },
        school: {
          isSelected: false,
          label: 'School'
        },
        degree: {
          isSelected: false,
          label: 'Degree'
        }
      },
      filters: {
        0: {
          index: '',
          name: '',
          value: ''
        }
      },
      contacts: [],
      filterMenu: false
    };
    this.getContacts = this.getContacts.bind(this);
    this.searchFor = this.searchFor.bind(this);
    this.setFilters = this.setFilters.bind(this);
    this.setFilterSearchText = this.setFilterSearchText.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.setSearchText = this.setSearchText.bind(this);
    this.filterMenu = this.filterMenu.bind(this);
    this.getContacts();
  };

  getContacts(){
    axios.get(BASE_URL+'index/')
      .then(res => this.setState({...this.state, contacts: res.data}))
      .catch(err => console.log(err));
  }

  searchFor(searchText, filters){
    axios.get(BASE_URL+'search/', {
      params : {
        name: searchText,
        filters : filters
      }
    })
      .then(res => {
        if(res.data.length > 0) {
          this.setState({...this.state, contacts: res.data})
        }
      })
      .catch(err => console.log(err));
  }

  setSearchText(event): void {
      event.persist();
      this.setState({
        searchText: event.target.value
      });
      this.searchFor(event.target.value, this.state.filters);
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
    });
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
        this.filterMenu();
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
          },
          filters: {

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

  filterMenu(){
    this.setState({
      ...this.state,
      filterMenu: !this.state.filterMenu
    });
  }

  render() {
    if(this.state.filterMenu){
      return (
        <div className='index-container'>
          <div className='index-content-header'>
            <NavBar />
          </div>
          <div className='index-content'>
            <SearchBox
              searchFor={this.searchFor}
              filters={this.state.filters}
              handleChange={this.setSearchText}
              searchText={this.state.searchText}
              showFilters={this.state.filterMenu}
              filterMenu={this.filterMenu}
            />
            <SearchFilters
              filters={this.state.filters}
              options={this.state.options}
              setSearchFilters={this.setSearchFilters}
              setFilters={this.setFilters}
              addFilter={this.addFilter}
              removeFilter={this.removeFilter}
              setFilterSearchText={this.setFilterSearchText}
              showFilters={this.state.filterMenu}
              filterMenu={this.filterMenu}
            />
            <IndexTable
              contacts={this.state.contacts}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className='index-container'>
          <div className='index-content-header'>
            <NavBar />
          </div>
          <div className='index-content'>
            <SearchBox
              searchFor={this.searchFor}
              filters={this.state.filters}
              handleChange={this.setSearchText}
              searchText={this.state.searchText}
              showFilters={this.state.filterMenu}
              filterMenu={this.filterMenu}
            />
            <IndexTable
              contacts={this.state.contacts}
            />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(SearchIndexContainer);
