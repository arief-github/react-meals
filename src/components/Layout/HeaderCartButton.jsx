import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.scss';
import cart from '../../assets/cart.svg';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((currNum, item) => {
    return currNum + item.amount
  }, 0);
  
  return (
    <button className={`${styles.button}`} onClick={props.onClick}>
        <img className={`${styles.icon}`} src={cart} alt='cart icon'/>
        <span>Your Cart</span>
        <span className={`${styles.badge}`}>{numberOfCartItems}</span>
    </button>
  )
};

export default HeaderCartButton