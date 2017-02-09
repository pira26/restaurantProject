import React from "react";
import "./carrousel.css";


class Carrousel extends React.Component {
  
  render() {
    
    return (
		      <div className="carrousel">
				<ul className="slide-nav">
					<li className="p1 size"><img src="https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg" alt="pic1"/></li >
					<li className="p2 size"><img src="http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg" alt="pic2"/></li >
					<li className="p3 size"><img src="https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg" alt="pic3"/></li >
					<li className="p4 size"><img src="http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg" alt="pic4"/></li >
				</ul>
			</div>
    );
  }
}

export default Carrousel;
