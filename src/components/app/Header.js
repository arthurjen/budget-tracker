import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() { 
    return ( 
      <header className={styles.header}>
        <h1>BUDGE</h1>
        <i className="fas fa-bars"></i>
      </header>
    );
  }
}
export default Header;