import React from 'react';
import axios from 'axios';


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

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
          <div className="container-popover" >
            <div className="category" onMouseEnter={() => {this.props.onHover('newsPopoverOpen')}} onMouseLeave={() => {this.props.onHoverLeave('newsPopoverOpen')}} >
              Reverb News
              <i class="fas fa-caret-down"></i>
            </div>
            <div className={this.props.newsPopoverOpen ? "popover-open" : "popover"} >
              <div className="news-container" onMouseEnter={() => {this.props.onHover('newsPopoverOpen')}} >
                <div className="news-articles" >
                  <div className="article" >
                    image will go here
                    <div> Title of the Article will go here </div>
                  </div>
                  <div className="article" >
                    image will go here
                    <div> Title of the Article will go here </div>
                  </div>
                  <button>View All Articles</button>
                </div>
                <div className="news-categories" >
                  Second Column
                  <div> News & Reviews </div>
                  <div> Tips & How-Tos </div>
                  <div> Interviews </div>
                  <div> Gear History </div>
                  <div> Demos </div>
                  <div> Videos </div>
                </div>
              </div>
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