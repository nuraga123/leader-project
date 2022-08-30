import React from "react";
import { useDispatch } from "react-redux";
import cn from 'classnames';

import styles from './styles.module.css';

import { addProduct } from "../../../store/cartSlice";


const CardProduct = ({ product }) => {
  const imgUrl = `./img/product/${product.img}`
  const dispatch = useDispatch();

  return (
    <li className={styles.container}>
      <div className={styles.cart}>
        <img className={styles.cart__picture}
          src={imgUrl}
          alt={product.img}
        />

        <div className={cn(`${styles.cart__content} ${styles.cart__movable}`)}>
          <p className={styles.cart__title}>
            {product.name}
          </p>
          <p className={styles.cart__price}>
            {product.price.toLocaleString()} ₽
          </p>
        </div>

        <button
          className={styles.cart__button}
          text='добавить в корзину'
          hover-text='в корзине'
          onClick={() => dispatch(addProduct(product))}
        />

      </div>
    </li>
  )
}

export default CardProduct;
