import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() { 
    return ( 
      <header className={styles.header}>
        <div>
          <img id="logo" src="https://i.imgur.com/gWe8jRs.jpg"/>
          <h1>BUDGE</h1>
        </div>
        <i className="fas fa-bars"></i>
      </header>
    );
  }
}
export default Header;