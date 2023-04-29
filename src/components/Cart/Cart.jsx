import React from 'react'
import styles from './Cart.module.scss';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = [{
    id: '1',
    name: 'Sashimi',
    price: 12.99
  }]

  return (
    <Modal onClose={props.onClose}>
        <ul className={styles.cartItems}>
            {
                cartItems.map(item => (
                    <li>{item.name}</li>
                ))
            }
        </ul>

        <div className={styles.total}>
            <span>Total Amount</span>
            <span>1</span>
        </div>

        <div className={styles.actions}>
            <button className={styles.buttonAlt} onClick={props.onClose}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart