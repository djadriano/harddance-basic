// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// --------------------------------------------------------------------
// Load Actions
// --------------------------------------------------------------------

import { videoActions } from '../actions/index';

// --------------------------------------------------------------------
// Load Component
// --------------------------------------------------------------------

import VideoComponent from '../components/video';

// --------------------------------------------------------------------
// Define the Container Component
// --------------------------------------------------------------------

export default class Video extends Component {
  render() {
    return (
      <VideoComponent />
    )
  }
}

// --------------------------------------------------------------------
// Get the states of all reducers and share into your component
// --------------------------------------------------------------------

function mapStateToProps(state) {
  return {
    loaded: state.video.loaded,
    appInitialized: state.app.initialized,
    introOpen: state.intro.open
  };
}

// --------------------------------------------------------------------
// Register the actions to components
// --------------------------------------------------------------------

const mapDispatchToProps = (dispatch) => {
  return {
    videoLoaded: () => {
      dispatch(videoActions.loaded());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoComponent);

