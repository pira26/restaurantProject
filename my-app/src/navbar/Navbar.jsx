import React, {Component} from 'react';
import './Navbar.css';

import Panier from '../img/panier.jpg'


class Navbar extends React.Component {
componentDidMount() {
	function scrollWin() {
	    window.scroll(0, 400);
	}
}
	render(){
		return(
			<div className="container">

				<div className="logo">

				    <a href="#" className="logotexte"><img className="logo" src="http://www.cuisinetamere.fr/wp-content/themes/ctm/img/logo.png"></img></a>

			    </div>

				<div className="menu">
					<ul>
						<li><a onclick="scrollWin()" href="#">Accueil</a></li>
						<li><a href="#">Carte</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>

				<button className="panier">
					<a href="#" className="monnaie">MON PANIER <i className="fa fa-shopping-basket fa-2x"></i></a>
				</button>
				<img className="likeornot" src ="http://www.onaimeoupas.fr/wp-content/uploads/2014/02/logonex.png"></img>
			</div>
	    )

	}
}

// J'autorise l'exportation du fichier Navbar vers le App !

export default Navbar;
