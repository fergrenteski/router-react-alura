import React from 'react'
import styles from './Header.module.css'
import MenuLink from '../MenuLink';

const Header = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/" name="Home"/>
        <MenuLink to="/about" name="About"/>
      </nav>
    </header>
  )
}

export default Header