import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() { 
    return ( 
      <header className={styles.header}>
        <h1><i className="fas fa-poo"></i> BUDGE</h1>
      </header>
    );
  }
}
 
export default Header;