import React, { Component } from 'react';
import Card from './Card/Card.jsx';
import Map from './Map/Map.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Card />
        <Map />
      </div>
    );
  }
}

export default App;
