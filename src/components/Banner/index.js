import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/sobre_mim_foto.jpeg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo</h1>
        <p className={styles.paragrafo}>
          Desenvolvedor FullStack Java, NodeJs.
          React e React Native.
        </p>
      </div>

      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="Círculo Colorido" />
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Luiz" />
      </div>
    </div>
  )
}

export default Banner