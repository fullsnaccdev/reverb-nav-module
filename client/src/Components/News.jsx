import React from 'react';
import axios from 'axios';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


class News extends React.Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false
    };
    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
  }

  onHover() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
  }

  onHoverLeave() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
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
          <div className="category" id="news-popover" onMouseEnter={this.onHover} onMouseLeave={this.onHoverLeave} >
            Reverb News
            <i class="fas fa-caret-down"></i>
          </div>
          <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="news-popover"
          >
            <PopoverHeader>This is popover title</PopoverHeader>
            <PopoverBody>
              This is simple popover content
            </PopoverBody>
          </Popover>
          <div className="category" >Price Guide</div>
          <div className="category" >Reverb Gives</div>
          <div className="category" >Shops</div>
        </div>
      </div>
    )
  }
};

export default News;