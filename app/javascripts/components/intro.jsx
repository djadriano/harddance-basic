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
      this.closeLoading();
      this.startIntro()
    }
  }

  closeLoading() {
    TweenMax.to('.hd-intro-title', 1, { opacity: 0, ease: Back.easeInOut.config(1), delay: 0.3});
  }

  startIntro() {
    TweenMax.to('.hd-logo span', 1, { y: "0%", ease: Back.easeInOut.config(1), delay: 1.15});
    TweenMax.to('.hd-text span', 1, { y: "0%", ease: Back.easeInOut.config(1), delay: 1.75});
  }

  render() {
    return (
      <div className="hd-intro">
        <div className="hd-loading">
          <h2 className="hd-intro-title">Carregando...</h2>
        </div>
        <div className="hd-coming-soon">
          <h1 className="hd-logo">
            <span>HardDance.com.br</span>
          </h1>
          <div className="hd-text">
            <span>Em breve</span>
          </div>
        </div>
      </div>
    );
  }
}
