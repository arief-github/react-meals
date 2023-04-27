import React from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const { id, name, description, price } = props;

  const priceToFixed = `$${price.toFixed(2)}`; 

  return (
    <li className={styles.meal} key={id}>
        <div>
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>{priceToFixed}</p>
        </div>
        <div>
            <MealItemForm/>
        </div>
    </li>
  )
}

export default MealItem