import React from 'react';
import styles from './HeaderCartButton.module.scss';
import cart from '../../assets/cart.svg';

const HeaderCartButton = () => {
  return (
    <button className={`${styles.button}`}>
        <img className={`${styles.icon}`} src={cart} alt='cart icon'/>
        <span>Your Cart</span>
        <span className={`${styles.badge}`}>10</span>
    </button>
  )
}

export default HeaderCartButton