import React from 'react';
import axios from 'axios';


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    axios.get('/api/nav/getAllNews')
      .then((results) => {
        this.setState({
          news: results.data
        })
      })
      .catch(err => console.error(err))
  }

  listNews() {
    return (
      this.state.news.length === 0 ? null :
      <>
        <div className="article" >
          <img className="img-thumbnail" src={this.state.news[this.state.news.length - 2].img}/>
          <div className="article-title" > {this.state.news[this.state.news.length - 2].title} </div>
        </div>
        <div className="article" >
          <img className="img-thumbnail" src={this.state.news[this.state.news.length - 1].img}/>
          <div className="article-title" > {this.state.news[this.state.news.length - 1].title} </div>
        </div>
      </>
    )
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
            <div className={this.props.newsPopoverOpen || this.props.newsPopoverDiv ? "popover-open" : "popover"} >
              <div className="news-container" onMouseEnter={() => {this.props.onHover('newsPopoverDiv')}} onMouseLeave={() => {this.props.onHoverLeave('newsPopoverDiv')}} >
                <div className="news-articles" >
                  {this.listNews()}
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