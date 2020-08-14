import React from 'react';
import axios from 'axios';
// import reverb from '../images/reverb.png';
// import reverb from "../images/2015-Reverb-Logo.jpg"

// right now the entire set of instruments mounts once the page loads.
// later on refactor so you're only querying for/returning the items that the user wants


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      instruments: [],
      currentSelection: [],
      currentSelectionCategories: [],
      lowestPrice: 1000
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }

  componentDidMount() {
    this.getInstruments();
  }

  changeHandler(e) {
    this.setState({
      query: e.target.value
    },() => {
      this.filterSearch()})
  }

  filterSearch() {
    if (this.state.query.length > 1) {
      let instrumentContainer = [];
      let categoryContainer = {};
      let lowestPrice = 1000;
      this.state.instruments.forEach((instrument) => {
        let words = instrument.name.toLowerCase();
        if(words.includes(this.state.query.toLowerCase())) {
          instrumentContainer.push(instrument);
          if (categoryContainer[instrument.category] === undefined) {
            categoryContainer[instrument.category] = 1;
          }
          if (instrument.price < lowestPrice) {
            lowestPrice = instrument.price;
          }
        }
      })
      categoryContainer = Object.keys(categoryContainer);
      this.setState({
        currentSelection: instrumentContainer,
        currentSelectionCategories: categoryContainer,
        lowestPrice: lowestPrice
      }, () => console.log(this.state))
    } else {
      <div></div>
    }
  }

  getInstruments() {
    axios.get('/api/getAllInstruments')
      .then((results) => {
        this.setState({
          instruments: results.data
        })
      })
      .catch(err => console.error(err))
  }

  isSearching() {
    if (this.state.currentSelection.length > 0 && this.state.query.length > 1) {
      let currentSelection = [];
      for (let i = 0; i < 4; i++) {
        currentSelection.push(this.state.currentSelection[i])
      }
      return (
        <div className="search-results" >
          {this.state.currentSelectionCategories.map((category, index) => (
            <div className="instrument-category" key={index} >
              {category}
            </div>
          ))}
          <div style={{"padding": "0 7px"}} >
            <div className="line" ></div>
          </div>
          {currentSelection.map((instrument) => (
            <div className="instrument" key={instrument.id} >
              <img src="thumbnail1.png"></img>
              <div className="instrument-details" >
                <div className="instrument-title" >{instrument.name}</div>
                <div className="instrument-suggestion" >{instrument.quantity} available from <span className="instrument-price" >${this.state.lowestPrice}</span></div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="nav-searchbar-container" >
        <div className="nav-searchbar" >
          <img style={{"padding-right": "2rem"}} src="reverb.png"></img>
          <div className={this.props.searching ? "overlay-message" : "searchbar-container"} >
            <div className="searchbar" >
              <input className="searchinput" onChange={ (e) => {this.changeHandler(e); this.props.searchMode(true)} } type="text" value={this.state.query} placeholder="Shop for used & new music gear..." />
              <div className="search-icon" >
                <i class="fas fa-search fa-flip-horizontal fa-2x"></i>
              </div>
            </div>
            {this.props.searching ? this.isSearching() : null}
          </div>
          <div className="user-actions" >
            <div className="sell" >Sell</div>
            <div className="icon-container" >
              <div className="icon" >
                <i class="far fa-star fa-2x" ></i>
              </div>
              <div className="icon-label" >Watch List</div>
            </div>
            <div className="icon-container" >
              <div className="icon" >
                <i class="fas fa-border-all fa-2x"></i>
              </div>
              <div className="icon-label" >My Feed</div>
            </div>
            <div className="icon-container" >
              <div className="container-popover" onMouseEnter={() => {this.props.onHover('cartPopoverOpen')}} onMouseLeave={() => {this.props.onHoverLeave('cartPopoverOpen')}} >
                <div className="icon" >
                  <i class="fas fa-shopping-cart fa-2x"></i>
                </div>
                <div className="icon-label" >Cart</div>
                <div className={this.props.cartPopoverOpen ? "cart-open" : "popover"} >
                  <div className="cart-item" >
                    <img src="thumbnail2.png" ></img>
                    <div className="item-title" >Fender Player Telecaster - 3-Color Sunburst #34858 <span style={{"margin": "3.4px 0 0"}} >$699.99</span></div>
                  </div>
                  <div style={{"padding": "8px"}} >
                    <button className="cart-button" >View Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sign-up" >Sign Up</div>
            <div className="sign-up" >Log In</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
