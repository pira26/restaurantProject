import React from "react";
import "./modal.css";


class Modal extends React.Component {
  render() {
    const { show, closeModal } = this.props;
   
    const styles = {
      modal: {
        display: (show) ? null : 'none', 
        backgroundColor:'rgba(255, 255, 255, 0.8)',       
      }
    };
    
    return (
      <div className="modalWrapper" style={styles.modal}>
        <span className="closeBtn" onClick={this.props.onClose}></span>
        <div className="modal-item">
        	{this.props.children}
		</div>
      </div>
    )
  }
}

export default Modal;