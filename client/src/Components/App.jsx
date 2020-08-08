import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import News from './News.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <div>
        <Search />
        <News />
      </div>
    )
  }
}

export default App;