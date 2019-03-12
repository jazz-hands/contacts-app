import React from 'react';
import Paper from '@material-ui/core/Paper';
import './styles/SearchIndex.css';
import IndexTable from './IndexTable';
import SearchBox from './SearchBox';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div className='IndexTable'>
        <SearchBox />
        <IndexTable />
      </div>
    );
  }
}

export default SearchIndex;
