import React, { useContext } from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const { id, name, description, price } = props;
  const cartCtx = useContext(CartContext);

  const priceToFixed = `$${price.toFixed(2)}`; 

  const onAddToCart = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    })
  };

  return (
    <li className={styles.meal}>
        <div>
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>{priceToFixed}</p>
        </div>
        <div>
            <MealItemForm onAddToCart={onAddToCart} id={id}/>
        </div>
    </li>
  )
}

export default MealItem;