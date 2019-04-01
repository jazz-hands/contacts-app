import React from 'react';
import Paper from '@material-ui/core/Paper';
import './styles/SearchIndex.css';
import IndexTable from './IndexTable';
import SearchBox from './SearchBox';
import SearchFilters from './SearchFilters';
import NavBar from './NavBar';

class SearchIndex extends React.Component {

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
    this.searchFor = this.searchFor.bind(this);
    this.setFilters = this.setFilters.bind(this);
    this.setFilterSearchText = this.setFilterSearchText.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.setSearchText = this.setSearchText.bind(this);
  };

  searchFor(searchText, filters){
    console.log('Searching for:');
    console.log(searchText);
    console.log(filters);
  }

  setSearchText(event): void {
      event.persist();
      this.setState({
        searchText: event.target.value
      });
      this.searchFor(this.state.searchText, this.state.filters);
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

  render() {

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
          />
          <SearchFilters
            filters={this.state.filters}
            options={this.state.options}
            setSearchFilters={this.setSearchFilters}
            setFilters={this.setFilters}
            addFilter={this.addFilter}
            removeFilter={this.removeFilter}
            setFilterSearchText={this.setFilterSearchText}
          />
          <IndexTable searchResults=""/>
        </div>
      </div>
    );
  }
}

export default SearchIndex;
