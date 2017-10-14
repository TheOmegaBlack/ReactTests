import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyBd4SsuCPpqLikqY4um-f4bJAyISPqOd9A";

const App = () => {
  return <SearchBar />
}

ReactDOM.render(<App />, document.querySelector(".container"))