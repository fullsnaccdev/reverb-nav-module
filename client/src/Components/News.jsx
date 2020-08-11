import React from 'react';
import axios from 'axios';

class News extends React.Component {
  constructor() {
    super();
    this.state = {

    };

  }

  render() {
    return (
      <div className="navbar" >
        <div className="navbar" >
          <div>Guitars</div>
          <div>Pedals and Amplifiers</div>
          <div>Keyboards and Synths</div>
          <div>Recording Gear</div>
          <div>Drums</div>
          <div>DJ and Audio Gear</div>
          <div>More Categories</div>
        </div>
        <div className="navbar" >
          <div>Reverb News</div>
          <div>Price Guide</div>
          <div>Reverb Gives</div>
          <div>Shops</div>
        </div>
      </div>
    )
  }
};

export default News;