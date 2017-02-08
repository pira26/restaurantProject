import React, { Component } from 'react';

class Map extends React.Component {
	componentDidMount() {
		const map = new window.google.maps.Map(this.refs.mapCanvas, {
    			center: {lat: 48.866667, lng: 2.333333},
    			zoom: 12
  		});
	}

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div ref="mapCanvas" style={{width:'500px', height:'400px'}}></div>
			</div>
		)
	}
}

export default Map;