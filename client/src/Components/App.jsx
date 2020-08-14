import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import News from './News.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      newsPopoverOpen: false,
      newsPopoverDiv: false,
      cartPopoverOpen: false,
      cartPopoverDiv: false,
    };
    this.searchMode = this.searchMode.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);

  }

  searchMode(searching) {
    this.setState({
      searching: searching,
    })
  }

  onHover(type) {
    this.setState({
      [type]: true,
    })
  }

  onHoverLeave(type) {
    setTimeout(() => {
      this.setState({[type]: false});
    }, 1000)
  }

  render() {
    return (
      <div className="nav" >
        <div className="banner" >
          <div className={this.state.searching ? "overlay" : ""} onClick={() => {this.searchMode(false)}} ></div>
          <div className="banner-left" >
            <div className="banner-message" >
              <div className="separation" > THE BEST OF JULY 2020 </div>
              <div className="message" > Top Sellers and Recent Releases </div>
            </div>
          </div>
          <div className="banner-right" >
            SHOP NOW
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <Search searchMode={this.searchMode} searching={this.state.searching} onHover={this.onHover} onHoverLeave={this.onHoverLeave} cartPopoverOpen={this.state.cartPopoverOpen} cartPopoverDiv={this.state.cartPopoverDiv} />
        <News onHover={this.onHover} onHoverLeave={this.onHoverLeave} newsPopoverOpen={this.state.newsPopoverOpen} newsPopoverDiv={this.state.newsPopoverDiv} />

      </div>
    )
  }
}

export default App;