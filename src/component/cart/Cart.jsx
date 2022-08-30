import React from 'react';

import styles from './styles.module.css';

import Header from '../header/Header';
import CartElementList from './cartElementList/CartElementList';
import Form from '../form/Form';
import Footer from '../footer/Footer';


const Cart = () => {
  return (
    <div>
      <div className={styles.header} >
        <Header />
      </div>
      <CartElementList />
      <Form />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Cart;