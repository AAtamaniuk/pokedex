import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//Styles
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalTarget = document.createElement('div');
    //this.modalTarget.className = 'Modal';
  }

  componentDidMount() {
    modalRoot.appendChild(this.modalTarget);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.modalTarget);
  }

  render() {
    const { onClose } = this.props;
    if (!this.props.open) {
      return null
    }
    return ReactDOM.createPortal(
      <div className='Modal' >
        <div className='Modal__overlay' role='button' onClick={onClose}/>
        <div className='Modal__window'>
          <button className='Modal__close' onClick={onClose}>Close</button>
          {this.props.children}
        </div>

      </div>,
      this.modalTarget
    );
  }
}


Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
  open: false
};

export default Modal;
