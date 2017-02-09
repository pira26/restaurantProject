import React, {Component} from 'react';
import './Navbar.css';

import Panier from '../img/panier.jpg'


class Navbar extends React.Component {

	render(){
		return(
			<div className="container">

				<div className="logo">

				    <a href="#" className="logotexte">La bonne bouffe</a>

			    </div>

				<div className="menu">
					<ul>
						<li><a href="#">Accueil</a></li>
						<li><a href="#">Carte</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>

				<button className="panier">
					<a href="#"><i className="fa fa-shopping-basket fa-2x"></i></a>
					<a href="#" className="monnaie">0 €</a>
				</button>

			</div>
	    )

	}
}

// J'autorise l'exportation du fichier Navbar vers le App !

export default Navbar;