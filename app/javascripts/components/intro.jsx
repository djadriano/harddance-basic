// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component } from 'react';

// --------------------------------------------------------------------
// Libs Imports
// --------------------------------------------------------------------

import TweenMax from 'gsap';

// --------------------------------------------------------------------
// Components Import
// --------------------------------------------------------------------

import Intro from '../containers/intro';

// --------------------------------------------------------------------
// Define Component
// --------------------------------------------------------------------

export default class IntroComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if( this.props.videoInitialized ) {
      this.close();
    }
  }

  close() {
    TweenMax.to('.hd-intro-title', 1.5, { opacity: 0, ease: Back.easeOut.config(1.5), delay: 0.6});
    TweenMax.to('.hd-intro', 1.8, { height: 0, ease: Back.easeOut.config(1.5), delay: 1.6});
  }

  render() {
    return (
      <div className="hd-intro">
        <h2 className="hd-intro-title">Harddance.com.br</h2>
      </div>
    );
  }
}
