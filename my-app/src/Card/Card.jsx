import React, { Component } from 'react';
import './Card.css';
import contenu from '../components/data.js'
// import $ from 'jquery';

class Card extends React.Component {

  render() {

    return (

      <div>
          { contenu.carte.map(menu =>
            <div className="Card">
            <img src={menu.image} className="img"/>
            <div className="text">
              <div className="title">{menu.name}<span className="price">{menu.price}</span></div>
              <div className="desc">{menu.description}</div>
            </div>
            <div className="add"><i className="fa fa-plus-circle" aria-hidden="true"></i></div>
            </div>
            )}
    </div>



);
}
}

export default Card;
