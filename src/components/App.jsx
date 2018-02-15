import React, { Component } from 'react';

import SearchBar from "../containers/SearchBar.jsx";
import CityList from '../containers/CityList.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
        <CityList />
      </div>
    );
  }
}
