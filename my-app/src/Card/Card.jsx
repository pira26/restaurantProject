import React, { Component } from 'react';
import './Card.css';
import contenu from '../components/data.js'
// import $ from 'jquery';

class Card extends React.Component {

  render() {

    return (
       
      <div>
        <div className="Card">
        <div className="img img1"></div>
        <div className="text">
          <div className="title">Poulet au poulet 100% poulet<span className="price">17,20€</span></div>
          <div className="desc">Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.</div>
        </div>
        <div className="add"><i className="fa fa-plus-circle" aria-hidden="true"></i></div>
      </div>
      <div className="Card">
        <div className="img img2"></div>
        <div className="text">
          <div className="title">Poulet au poulet 100% poulet<span className="price">17,20€</span></div>
          <div className="desc">Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.</div>
        </div>
        <div className="add"><i className="fa fa-plus-circle" aria-hidden="true"></i></div>
      </div>
      <div className="Card">
        <div className="img img3"></div>
        <div className="text">
          <div className="title">Poulet au poulet 100% poulet<span className="price">17,20€</span></div>
          <div className="desc">Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.</div>
        </div>
        <div className="add"><i className="fa fa-plus-circle" aria-hidden="true"></i></div>
      </div>
    </div>
 
      
    

);
}
}

export default Card;
