import React, { Component } from 'react';
import './Map.css';
// import $ from 'jquery';

class Map extends React.Component {

compnentDidMount(){
  var map = new window.google.maps.Map(this.refs.mapi, {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
  });
}
  render() {

    return (
      <div>
        <div className="titleMap"><i className="fa fa-map-marker" aria-hidden="true"></i> Ou nous trouver:</div>
        <div className="mapCenter">
          <div id="map" ref="mapi"></div>
        </div>
     </div>

);
}
}

export default Map;
