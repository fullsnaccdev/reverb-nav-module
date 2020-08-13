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
                    <img src="thumbnail1.png"/>
                    <div className="article-title" > Title of the Article will go here </div>
                  </div>
                  <div className="article" >
                    <img src="thumbnail2.png"/>
                    <div className="article-title" > Title of the Article will go here </div>
                  </div>
                  <button className="button-article" >View All Articles</button>
                </div>
                <div className="news-categories" >
                  <div className="news-category" > News & Reviews </div>
                  <div className="news-category" > Tips & How-Tos </div>
                  <div className="news-category" > Interviews </div>
                  <div className="news-category" > Gear History </div>
                  <div className="news-category" > Demos </div>
                  <div className="news-category" > Videos </div>
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