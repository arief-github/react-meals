import React from 'react'
import styles from './Header.module.scss';
import restoImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
   <>
    <header className={`${styles.header}`}>
        <h1>React Dinner</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={`${styles.main_image}`}>
        <img src={restoImage} alt='resto image'/>
    </div>
   </>
  )
}

export default Header