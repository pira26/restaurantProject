import React, { Component } from 'react';
import './Map.css';
// import $ from 'jquery';

class Map extends React.Component {
	componentDidMount() {
    // fetch("https://maps.googleapis.com/maps/api/geocode/json?address=51+Rue+de+Vincennes+93100+Montreuil,+FR&key=AIzaSyD-6XvCVeVBRstAnJv62TWu1HYqICn42Ko").then(function(response) {
    //   var contentType = response.headers.get("content-type");
    //   if(contentType && contentType.indexOf("application/json") !== -1) {
    //     return response.json().then(function(json) {
    //     // traitement du JSON
    //     });
    //   } else {
    //     console.log("Oops, nous n'avons pas du JSON!");
    // }
    const myLatLng = {lat: 48.866667, lng: 2.333333};
		const map = new window.google.maps.Map(this.refs.mapCanvas, {
      center: myLatLng,
    	zoom: 12
  	});
    const marker = new window.google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "La Bonne Bouffe"
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
