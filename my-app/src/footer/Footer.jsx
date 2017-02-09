import React, {Component} from 'react';
import './Footer.css';

import accueil from '../img/accueil.png'
import carte from '../img/carte.png'
import contact from '../img/contact.png'

class Footer extends React.Component {

	render(){
		return(
			<div className="container-fluid">

				<div className="adresse">

				    <h2>La bonne bouffe</h2>
				    <p>55 rue de Vincennes</p>
				    <p>93100 Montreuil</p>

			    </div>

			    <div className="reseaux">
					<ul>
						<li><a href="#" className="ricon"><i className="fa fa-facebook-square fa-2x"></i></a></li>
						<li><a href="#" className="ricon"><i className="fa fa-twitter-square fa-2x"></i></a></li>
						<li><a href="#" className="ricon"><i className="fa fa-instagram fa-2x"></i></a></li>
					</ul>

			    </div>

				<div className="menu-foot">

					<ul>
						<li><a href="#" className="ficon"><i className="fa fa-home fa-2x"></i></a></li>
						<li><a href="#" className="ficon"><i className="fa fa-map-marker fa-2x"></i></a></li>
						<li><a href="#" className="ficon"><i className="fa fa-mobile fa-2x"></i></a></li>
					</ul>
					
				</div>

			</div>
	    )

	}
}

// J'autorise l'exportation du fichier Footer vers le App !

export default Footer;