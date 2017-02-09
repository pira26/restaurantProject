import React, { Component } from 'react';


import Carrousel from './carrousel/Carrousel.jsx';

import Description from './components/description/Description';
import Map from './Map/Map.jsx';
import Card from './Card/Card.jsx';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Carrousel />
     
  


  
      		<Description />
        	<Card />
        	<Map />
        </div>

    );
  }
}

export default App;
