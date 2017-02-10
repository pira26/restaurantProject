import React, { Component } from 'react';
import './Map.css';
// import $ from 'jquery';

class Map extends React.Component {
	componentDidMount() {

    const myLatLng = {lat: 48.8541282, lng: 2.4368220000000065};

		const map = new window.google.maps.Map(this.refs.mapCanvas, {
      center: myLatLng,
    	zoom: 12
  	});
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=51+Rue+de+Vincennes+93100+Montreuil,+FR&key=AIzaSyD-6XvCVeVBRstAnJv62TWu1HYqICn42Ko").then(function(response){
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          console.log('json:'+ JSON.stringify(json));
          return json.results[0].geometry.location; 
        // traitement du JSON
        });
      } 
      else {
        console.log("Oops, nous n'avons pas du JSON!");
      }
    }).then(function(location){
        console.log('location:' + location.lat);
        const marker = new window.google.maps.Marker({
        position: {lat: location.lat, lng: location.lgn},
        map: map,
        title: "La Bonne Bouffe"
        });
      });

  }
  render() {

    return (
      <div id="mappos">
        <div className="titleMap"><i className="fa fa-map-marker" aria-hidden="true"></i> Ou nous trouver:</div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-12">
          <div ref="mapCanvas" style={{width:'100%', height:'400px'}}></div>
        </div>
     </div>

);
}
}

export default Map;
