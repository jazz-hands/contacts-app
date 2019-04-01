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
      filters: {}
    }
    this.searchFor = this.searchFor.bind(this);
    this.setSearchFilters = this.setSearchFilters.bind(this);
  };

  searchFor(searchText, filters){
    console.log('Searching for:');
    console.log(searchText);
    console.log(filters);
  }

  setSearchFilters(filters){
    this.setState({
      ...this.state,
      filters
    });
  }

  render() {

    return (
      <div className='index-container'>
        <div className='index-content-header'>
          <NavBar />
        </div>
        <div className='index-content'>
          <SearchBox searchFor={this.searchFor} filters={this.state.filters}/>
          <SearchFilters setSearchFilters={this.searchFilters}/>
          <IndexTable searchResults=""/>
        </div>
      </div>
    );
  }
}

export default SearchIndex;
