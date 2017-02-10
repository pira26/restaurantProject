import React from "react";
import "./modal.css";


class ModalContent extends React.Component {
  render() {
   
    return (
      <div className="content">
              <div className="monPanier">Mon Panier</div>
                <div className="choiceContent">
                <div className="choiceWrapper">
                  <div className="plat">Ma commande
                      <ul>
                        <li>Plat</li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                  </div>
                  <div className="quantite">Quantités
                      <ul>
                        <li>0</li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                  </div>
                  <div className="prix">Prix
                      <ul>
                        <li>0</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                  <div className="delete">Suppr
                      <ul>
                        <li>X</li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
              </div>
                  <div className="total">
                        <h2>Total</h2>
                  </div>
                
          </div>
          <button className="cmd">Commander</button>
      </div>
    )
  }
}

export default ModalContent;