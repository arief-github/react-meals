import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.scss';
import cart from '../../assets/cart.svg';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [isBump, setIsBump] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((currNum, item) => {
    return currNum + item.amount
  }, 0);

  const { items } = cartContext;
  const btnClasses = `${styles.button} ${isBump ? styles.bump : ''}`;

  useEffect(() => {
    if(items.length === 0) return;

    setIsBump(true);

    const timer = setTimeout(() => {
      setIsBump(false)
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items])
  
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <img className={styles.icon} src={cart} alt='cart icon'/>
        <span>Your Cart</span>
        <span className={`${styles.badge}`}>{numberOfCartItems}</span>
    </button>
  )
};

export default HeaderCartButton