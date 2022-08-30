import React from "react";
import { useDispatch } from "react-redux";

import styles from './styles.module.css';

import { deleteProduct, increaseProduct, decreaseProduct } from "../../../store/cartSlice";


const CartElement = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.picture}
          src={`./img/product/${product.img}`}
          alt={product.img}
        />

        <p className={styles.title}>
          {product.name}
        </p>

        <div className={styles.changeProduct}>
          <div className={styles.wrapper}>
            <button
              className={styles.sign}
              onClick={() => dispatch(decreaseProduct(product))}
              disabled={product.count === 1}
            >
              <svg viewBox="0 0 19 1" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.476562" y1="0.5" x2="18.5066" y2="0.5" />
              </svg>
            </button>

            <p className={styles.counter}>
              {product.count}
            </p>

            <button
              className={styles.sign}
              onClick={() => dispatch(increaseProduct(product))}
              disabled={product.count === 10}
            >
              <svg className={styles.plus} viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                <line y1="-0.5" x2="17.5227" y2="-0.5" transform="matrix(0.727587 0.686015 -0.727587 0.686015 0.250488 0.843262)" />
                <line y1="-0.5" x2="17.5227" y2="-0.5" transform="matrix(-0.727587 0.686015 -0.727587 -0.686015 13 0.135986)" />
              </svg>
            </button>
          </div>

          <p className={styles.price}>
            {(product.price * product.count).toLocaleString()} ₽
          </p>
        </div>

        <button
          className={styles.button__delete}
          onClick={() => dispatch(deleteProduct(product))}
        >
          <svg className={styles.button__image} viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="17.5227" y2="-0.5" transform="matrix(0.727587 0.686015 -0.727587 0.686015 0.250488 0.843262)" />
            <line y1="-0.5" x2="17.5227" y2="-0.5" transform="matrix(-0.727587 0.686015 -0.727587 -0.686015 13 0.135986)" />
          </svg>

          <p className={styles.button__text}>
            Удалить
          </p>
        </button>
      </div>

      <div className={styles.separator} />
    </div>
  )
}

export default CartElement;