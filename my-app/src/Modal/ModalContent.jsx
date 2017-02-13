import React from "react";
import "./modal.css";
import Panier from '../img/panier.jpg';


class ModalContent extends React.Component {
  render() {
   
    return (
      <div className="content">
          <a href="acceuilpos" className="closingX"><span>X</span></a>
              <div className="monPanier">Mon Panier</div>
                <div className="choiceContent">
                <div className="choiceWrapper">
                  <div className="plat">
                      <ul>
                        <li>Plat</li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                  </div>
                  <div className="quantite">
                      <ul>
                        <li>0</li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                  </div>
                  <div className="prix">
                      <ul>
                        <li>0<span>€</span></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                  <div className="delete">
                      <ul>
                        <li><a href="#"><i className="fa fa-times-circle-o" aria-hidden="true"></i></a></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
              </div>
                  <div className="total">
                        <h2>Total</h2>
                        <div className="price"><div className="result">0</div><span>€</span></div>
                  </div>
                
          </div>
         <button className="cmd">Commander</button>
      </div>
    )
  }
}

export default ModalContent;