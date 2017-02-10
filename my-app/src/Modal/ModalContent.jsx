import React from "react";
import "./modal.css";


class ModalContent extends React.Component {
  render() {
   
    return (
      <div className="content">
              <div className="monPanier">Mon Panier</div>
                <div className="choiceContent">
                  <div className="plat">Ma commande
                    <ul>
                      <li>Plat</li>
                    </ul>
                  </div>
                  <div className="quantite">Quantités</div>
                  <div className="prix">Prix</div>
                  <div className="delete">Suppr</div>
                </div>
                <div className="total"></div>
                <button className="cmd">Commander</button>
          </div>
    )
  }
}

export default ModalContent;