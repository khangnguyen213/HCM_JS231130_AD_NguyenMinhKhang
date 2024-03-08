import React from 'react';
import styles from './Cart.module.css';
import { formatToVNDMoney } from '../formatMoney';

export default function Cart({ cart, onAdd, onRemove, onClose }) {
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <div className={styles.cart}>
      <button className={styles.btn_close} onClick={onClose}>
        x
      </button>
      <h1>Giỏ hàng</h1>
      <div className={styles.cart_items}>
        {cart.length > 0 &&
          cart.map((item) => (
            <div key={item.id} className={styles.cart_item}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{formatToVNDMoney(item.price)}</p>
              </div>
              <div className={styles.btn_group}>
                <button onClick={() => onRemove(item.id, 1)}>-</button>
                <h3>{item.quantity}</h3>
                <button onClick={() => onAdd(item)}>+</button>
                <button onClick={() => onRemove(item.id)}>🗑</button>
              </div>
            </div>
          ))}
        {cart.length === 0 && <h3>Giỏ hàng trống</h3>}
      </div>
      <h2 className={styles.total_money}>
        Tổng tiền: {formatToVNDMoney(itemsPrice)}
      </h2>
    </div>
  );
}
