import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    Rick and Morty
    <div>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
    </div>
  </header>
);

export default Header;
