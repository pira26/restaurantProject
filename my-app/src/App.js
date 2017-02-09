import React, { Component } from 'react';
import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';
import Carrousel from './carrousel/Carrousel.jsx';
import Description from './components/description/Description';
import Map from './Map/Map.jsx';
import Card from './Card/Card.jsx';
import Modal from './Modal/Modal.jsx';


class App extends Component {

   constructor(props) {
    super(props);
    // Init state
    this.state = { modalOpen: props.opened};
  }
  
  // Toggle Modal visibility
  toggleModal(content) {
    const state = this.state.modalOpen;
    // Update state: modal visibility and its content
    this.setState({ modalOpen: !state });
  }

  render() {
     const { modalOpen} = this.state;
    return (
      <div className="App">


      	<Modal bg="#222" show={ modalOpen } 
           onClose={ this.toggleModal.bind(this) }>
          <div className="content">


          </div>
        </Modal>
          
        <button className="openBtn" 
          onClick={this.toggleModal.bind(this)}>
          <a href="#"><i className="fa fa-shopping-basket fa-2x"></i></a>
          <a href="#" className="monnaie">0 €</a>
        </button>









        <Navbar />
        <Carrousel />
      	<Description />
        <Card />
        <Map />
        <Footer /> 
      </div>

    );
  }
}

export default App;
