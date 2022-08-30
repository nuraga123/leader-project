import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import CardProductList from "./cardProductList/CardProductList";

import styles from './styles.module.css';

const CatalogProducts = () => {
  return (

    <div className={styles.product__content}>
      <Header />
      <CardProductList />
      <Footer />
    </div>
  )
}

export default CatalogProducts;