import React from 'react'
import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'
import PrimaryButtton from 'components/common/PrimaryButton'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
const navegar = useNavigate();

  return (
    <>
    <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>
        404
      </span>

      <h1 className={styles.ttitul}>
        Ops! Página não encontrada.
      </h1>

      <p className={styles.paragrafo}>
        Tem certeza que é isso que você está procurando?
      </p>
      <p className={styles.paragrafo}>
        Aguarde um momento e recarregue a página, ou volte para a página inicial.
      </p>
      <div className={styles.botaoContainer} onClick={() => navegar('/')}>
        <PrimaryButtton tamanho="lg">Voltar</PrimaryButtton>
      </div>

      <img src={erro404} alt="Cachorro" className={styles.imagemCachorro}/>
    </div>
    <div className={styles.espacoEmBranco}>

    </div>
    </>
  )
}

export default NotFound