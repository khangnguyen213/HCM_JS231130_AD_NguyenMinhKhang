import React from 'react';
import styles from './ProductCard.module.css';
import { formatToVNDMoney } from '../formatMoney';

export default function ProductCard({ product, onAdd, onRemove }) {
  const { id, name, price, image } = product;
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{formatToVNDMoney(price)}</p>
      <button onClick={() => onAdd(product)}>Thêm vào giỏ hàng</button>
    </div>
  );
}
