import React, { Component } from 'react';
import './Track.css';

class Track extends Component {

  state = {
    isRemoval: false
  }

  render() {
    const buttonText = this.state.isRemoval ? '-' : '+';
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action">{buttonText}</button>
      </div>
    )
  }
}

export default Track;
