import React from "react";

import cardProductArray from "../../../store/cardProductArray";
import CardProduct from "../cardProduct/CardProduct";

import styles from './styles.module.css';

const CardProductList = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          Каталог товаров
        </h1>

        <ul className={styles.list}>
          {cardProductArray.map(
            el => <CardProduct
              key={el.id}
              product={el}
            />
          )}
        </ul>
      </div>
    </div>
  )
}

export default CardProductList;