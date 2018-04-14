import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDc0RdqZfYshIFsnmMjUYHZDMRRf2MZ7lU';

YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
    console.log(data);
});

// Create component => functionnal component (don't have state)
const App = () => {
  return (
      <div>
          <SearchBar/>
      </div>
  );
};

// Show in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));