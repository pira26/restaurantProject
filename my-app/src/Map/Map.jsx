import React, { Component } from 'react';
import './Map.css';
// import $ from 'jquery';

class Map extends React.Component {
	componentDidMount() {
		const map = new window.google.maps.Map(this.refs.mapCanvas, {
    	// const optionMarqueur = {
     //    position: maCarte.getCenter(),
     //    map: maCarte

            
     //  };
          //const marqueur = new window.google.maps.Marker();
          //marqueur.setOptions(optionMarqueur);
          center: {lat: 48.866667, lng: 2.333333},
    			zoom: 12
  		});
	}
  render() {

    return (
      <div>
        <div className="titleMap"><i className="fa fa-map-marker" aria-hidden="true"></i> Ou nous trouver:</div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div ref="mapCanvas" style={{width:'100%', height:'400px'}}></div>
        </div>
     </div>

);
}
}

export default Map;
