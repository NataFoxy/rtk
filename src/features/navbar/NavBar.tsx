import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar():JSX.Element {
  return (
    <div className={styles.container}>
        <NavLink to="counter" className={styles.link}> Counter</NavLink>
        <NavLink to="products" className={styles.link}> Products</NavLink>
        <NavLink to="create" className={styles.link}> Product Create</NavLink>
        <NavLink to="/" className={styles.link}> Home</NavLink>
    </div>
  );
}
