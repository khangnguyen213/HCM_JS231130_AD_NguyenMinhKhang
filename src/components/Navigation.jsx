import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation({ cart, onOpenCart }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_left}>
        <h3>Trang chủ</h3>
        <h3>Danh sách sản phẩm</h3>
      </div>
      <div className={styles.cart}>
        <h3 onClick={onOpenCart}>🛒</h3>
        <h4 className={styles.cart_quantity_icon}>
          {cart.reduce((prev, cur) => (prev += cur.quantity), 0)}
        </h4>
      </div>
    </nav>
  );
}
