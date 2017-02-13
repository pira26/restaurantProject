import React, { Component } from 'react';
import './Card.css';
import contenu from '../components/data.js'

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
              <div className="add" onClick={() => this.props.addItemCard([menu.name, menu.price])}><i className="fa fa-plus-circle"></i></div>
            </div>
          )}
    </div>



    );
  }
}

export default Card;
