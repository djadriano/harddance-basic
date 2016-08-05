// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component } from 'react';

// --------------------------------------------------------------------
// Components Import
// --------------------------------------------------------------------

import Intro from '../containers/intro';
import Video from '../containers/video';

// --------------------------------------------------------------------
// Define Component
// --------------------------------------------------------------------

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialized();
  }

  render() {
    return (
      <div className="app-container">
        <Intro />
        <Video />
      </div>
    );
  }
}
