import React from 'react';
import axios from 'axios';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      instruments: [],
      currentSelection: [],
      currentSelectionCategories: [],
      cart: [],
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  changeHandler(e) {
    this.setState({
      query: e.target.value
    },() => {
      this.getInstruments()})
  }

  getInstruments() {
    axios.get(`/api/getInstruments/${this.state.query}`)
      .then((results) => {
        this.setState({
          currentSelection: results.data.instruments,
          currentSelectionCategories: results.data.categories
        })
      })
      .catch(err => console.error(err))
  }

  addToCart(instrument) {
    this.setState({
      cart: [...this.state.cart, instrument]
    })
  }

  isSearching() {
    if (this.state.currentSelection.length > 0 && this.state.query.length > 1) {
      // only want to display the first 4 relevant items to user query
      let currentSelection = this.state.currentSelection.slice(0, 4);
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
            <div className="instrument" key={instrument.id} onClick={() => {this.addToCart(instrument)}} >
              <img className="img-thumbnail" src={instrument.image}></img>
              <div className="instrument-details" >
                <div className="instrument-title" >{instrument.name}</div>
                <div className="instrument-suggestion" >{instrument.quantity} available from <span className="instrument-price" >${instrument.price}</span></div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  }

  render() {
    // only want to display the first 3 items in the cart
    let visibleCartItems = this.state.cart.slice(0, 3);
    return (
      <div className="nav-searchbar-container" >
        <div className="nav-searchbar" >
          <img style={{"padding-right": "2rem", "cursor": "pointer"}} src="reverb.png"></img>
          <div className={this.props.searching ? "overlay-message" : "searchbar-container"} >
            <div className="searchbar" >
              <input className="searchinput" onChange={(e) => {this.changeHandler(e); this.props.searchMode(true)}} type="text" value={this.state.query} placeholder="Shop for used & new music gear..." />
              <div className="search-icon" style={{"cursor": "pointer"}} >
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
                  <i class="fas fa-shopping-cart fa-2x">
                    <span className={this.state.cart.length > 0 ? "notifs" : "none"} >{this.state.cart.length}</span>
                  </i>
                </div>
                <div className="icon-label" >Cart</div>
                <div className={this.props.cartPopoverOpen || this.props.cartPopoverDiv ? "cart-open" : "popover"} onMouseEnter={() => {this.props.onHover('cartPopoverDiv')}} onMouseLeave={() => {this.props.onHoverLeave('cartPopoverDiv')}} >
                  {this.state.cart.length > 0 ? visibleCartItems.map((instrument) => (
                    <div className="cart-item" >
                      <img className="img-thumbnail-cart" src={instrument.image} ></img>
                      <div className="item-title" >{instrument.name} <span style={{"margin": "3.4px 0 0"}} >${instrument.price}</span></div>
                    </div>
                  )) : null }
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
