import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
      instruments: [],
      currentSelection: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.getInstruments = this.getInstruments.bind(this);
  }

  componentDidMount() {
    this.getInstruments();
  }

  changeHandler(e) {
    this.setState({
      item: e.target.value
    }, () => console.log(this.state))
  }


  getInstruments() {
    axios.get('/api/getAllInstruments')
      .then((results) => {
        this.setState({
          instruments: results.data
        }, () => console.log(this.state))
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <div className='banner'> HANDPICKED AND UPDATED DAILY | Deals and Steals </div>
        <div>
          <div>Reverb</div>
          <input onChange={this.changeHandler} type="text" value={this.state.item} placeholder="Shop for used & new music gear..." />
          <button>Search</button>
        </div>
      </div>
    )
  }
}

export default Search;