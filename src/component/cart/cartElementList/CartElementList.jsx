import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

import CartElement from '../cartElement/CartElement';


const CartElementList = () => {
  const products = useSelector(state => state.cart.value);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Корзина
      </h1>

      {products.map(el =>
        <CartElement
          key={el.id}
          product={el}
        />)
      }

      <h1 className={styles.sum}>
        {'Сумма '}
        {products.reduce((
          acc, current
        ) =>
          acc + current.price * current.count, 0)
          .toLocaleString()} ₽
      </h1>
    </div>
  )
}

export default CartElementList;