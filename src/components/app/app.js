import React, { Component } from 'react';

import './app.css';
import SearchForm from '../search-form/search-form';
import ContentBlock from '../content-block/content-block';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <SearchForm/>
        <ContentBlock/>
      </React.Fragment>
    );
  }
};
