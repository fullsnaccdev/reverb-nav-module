import React from 'react';
import axios from 'axios';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  // onMouseEnter={this.onHover} onMouseLeave={this.onHoverLeave} overlay={popover}

  render() {
    return (
      <div className="navbar" >
        <div className="categories" >
          <div className="category" >Guitars</div>
          <div className="category" >Pedals and Amplifiers</div>
          <div className="category" >Keyboards and Synths</div>
          <div className="category" >Recording Gear</div>
          <div className="category" >Drums</div>
          <div className="category" >DJ and Audio Gear</div>
          <div className="category" >More Categories</div>
        </div>
        <div className="categories" >
          <div className="news-popover" >
            <div className="category" id="news-popover" onMouseEnter={() => {this.props.onHover()}} onMouseLeave={this.props.onHoverLeave} >
              Reverb News
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          <div className="category" >Price Guide</div>
          <div className="category" >Reverb Gives</div>
          <div className="category" >Shops</div>
        </div>
      </div>
    )
  }
};

export default News;