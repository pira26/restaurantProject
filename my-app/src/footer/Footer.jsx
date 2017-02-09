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

				<div className="menu-foot">

					<ul>
						<li><a href="#" className="lien1"><i className="fa fa-home fa-3x"></i></a></li>
						<li><a href="#" className="lien2"><i className="fa fa-map-marker fa-3x"></i>
</a></li>
						<li><a href="#" className="lien3"><i className="fa fa-mobile fa-3x"></i></a></li>
					</ul>
					
				</div>

			</div>
	    )

	}
}

// J'autorise l'exportation du fichier Footer vers le App !

export default Footer;