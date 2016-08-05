// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// --------------------------------------------------------------------
// Load Actions
// --------------------------------------------------------------------

import { introActions } from '../actions/index';

// --------------------------------------------------------------------
// Load Component
// --------------------------------------------------------------------

import IntroComponent from '../components/intro';

// --------------------------------------------------------------------
// Define the Container Component
// --------------------------------------------------------------------

export default class Intro extends Component {
  render() {
    return (
      <IntroComponent />
    )
  }
}

// --------------------------------------------------------------------
// Get the states of all reducers and share into your component
// --------------------------------------------------------------------

function mapStateToProps(state) {
  return {
    videoInitialized: state.video.loaded
  };
}

// --------------------------------------------------------------------
// Register the actions to components
// --------------------------------------------------------------------

const mapDispatchToProps = (dispatch) => {
  return {
    appLoaded: () => {
      dispatch(introActions.open());
    },
    closed: () => {
      dispatch(introActions.close());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroComponent);

