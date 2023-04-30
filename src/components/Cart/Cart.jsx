import React, { useContext } from 'react'
import styles from './Cart.module.scss';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalamount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHander = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  };

  return (
    <Modal onClose={props.onClose}>
        <ul className={styles.cartItems}>
            {
                cartCtx.items.map(item => (
                    <CartItem
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      amount={item.amount}
                      onRemove={cartItemRemoveHander.bind(null, item.id)}
                      onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))
            }
        </ul>

        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalamount}</span>
        </div>

        <div className={styles.actions}>
            <button className={styles.buttonAlt} onClick={props.onClose}>Close</button> 
           { hasItems ? <button className={styles.button}>Order</button> : null }
        </div>
    </Modal>
  )
}

export default Cart