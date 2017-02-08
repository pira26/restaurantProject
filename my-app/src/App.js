import React, { Component } from 'react';
import Description from './components/description/Description';
import Map from './components/map/Map';

class App extends Component {
  render() {
    return (
      <div>
      	<Description />
      	<Map />
      </div>
    );
  }
}

export default App;
