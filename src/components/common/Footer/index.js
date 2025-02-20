import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada/>
      <p> Desenvolvido por Luiz (via Alura) </p>
    </footer>
  )
}

export default Footer