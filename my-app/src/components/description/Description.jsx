import React, { Component } from 'react';
import contenu from '../data.js';

const styles = {
	contentStyle: {
    	padding: '0px',
    	margin: '0px',
    	textAlign:'center',
    	fontFamily:'Roboto'
	},
	titleStyle: {
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	}
}

class Description extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={styles.contentStyle}>
				<div style={styles.titleStyle}>
					<i className="fa fa-cutlery"></i>
					<h1 style={{paddingRight:'15px', paddingLeft:"15px", fontStyle:'italic'}}>{contenu.name}</h1>
					<i className="fa fa-cutlery"></i>
				</div>
				<p style={{color:'grey'}}>{contenu.description}</p>	
			</div>
		)
	}
}

export default Description;