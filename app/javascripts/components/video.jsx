// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component } from 'react';

// --------------------------------------------------------------------
// Define Component
// --------------------------------------------------------------------

export default class VideoComponent extends Component {
  constructor(props) {
    super(props);

    this.arrVideos = ['QtYDvqJgQqo', 'B-7m0EfW7LM', 'VF1Yz05iQM0'];
  }

  componentDidUpdate() {
    if(this.props.appInitialized) {
      this.initialize();
    }

    if( !this.props.introOpen ) {
      this.playVideo();
    }
  }

  initialize() {
    window.onYouTubeIframeAPIReady = () => {
      this.player = new YT.Player('player', {
        videoId: this.arrVideos[Math.floor(Math.random() * this.arrVideos.length)],
        startSeconds: 0,
        playerVars: {
          'autoplay'      : 0,
          'controls'      : 0,
          'rel'           : 0,
          'showinfo'      : 0,
          'modestbranding': 0,
          'iv_load_policy': 3
        },
        events: {
          'onReady'      : this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this)
        }
      });
    }
  }

  onPlayerReady(evt) {
    this.props.videoLoaded();
  }

  playVideo() {
    this.player.playVideo();
  }

  onPlayerStateChange() {
    console.log('onPlayerStateChange');
  }

  render() {
    return (
      <div id="player"></div>
    );
  }
}
