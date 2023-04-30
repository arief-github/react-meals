import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = (props) => {
  const { name, price, amount, onRemove, onAdd } = props;
  
  const priceToFixed = `$${price.toFixed(2)}`;
  
  return (
    <li className={styles.cartItem}>
        <div>
            <h2>{name}</h2>
            <div className={styles.summary}>
                <span className={styles.price}>{priceToFixed}</span>
                <span className={styles.amount}>x {amount}</span>
            </div>
        </div>
        <div className={styles.actions}>
            <button onClick={onRemove}> ➖ </button>
            <button onClick={onAdd}> ➕ </button>
        </div>
    </li>
  )
}

export default CartItem;