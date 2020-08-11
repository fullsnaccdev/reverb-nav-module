import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import News from './News.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false
    };
    this.searchMode = this.searchMode.bind(this);
  }

  searchMode(searching) {
    this.setState({
      searching: searching
    })
  }

  render() {
    return (
      <div  >
        <div className="banner" >
          <div className={this.state.searching ? "overlay" : ""} onClick={() => {this.searchMode(false)}} ></div>
          <div className="banner-left" >
            <div className="banner-message" >
              <div className="separation" > THE BEST OF JULY 2020 </div>
              <div> Top Sellers and Recent Releases </div>
            </div>
          </div>
          <div className="banner-right" > SHOP NOW A </div>
        </div>
        <Search searchMode={this.searchMode} searching={this.state.searching} />
        <News />
      </div>
    )
  }
}

export default App;