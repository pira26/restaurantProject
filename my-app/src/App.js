import React, { Component } from 'react';
import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div>
      	<Navbar />
      	<Footer />
      </div>
    );
  }
}

export default App;
