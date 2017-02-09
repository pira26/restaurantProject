import React, {Component} from 'react';
import './Navbar.css';
import Panier from '../img/panier.jpg'


class Navbar extends React.Component {

	render(){
		return(
			<div id="acceuilpos" className="container">
				<div className="logo">
<<<<<<< HEAD
				    <a href="#" className="logotexte"><img className="logo" src="http://www.cuisinetamere.fr/wp-content/themes/ctm/img/logo.png"></img></a>
=======

				    <a href="#" className="logotexte"><img className="logo" src="http://www.cuisinetamere.fr/wp-content/themes/ctm/img/logo.png"/></a>

>>>>>>> bcbc46164e66b7fbe6b83c4e7be777823eff688a
			    </div>

				<div className="menu">
					<ul>
						<li><a href="#acceuilpos">Accueil</a></li>
						<li><a href="#mappos">Carte</a></li>
						<li><a href="#contactpos">Contact</a></li>
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
