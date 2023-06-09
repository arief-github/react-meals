import React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal;