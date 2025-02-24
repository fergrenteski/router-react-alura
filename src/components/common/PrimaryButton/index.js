import styles from './PrimaryButton.module.css'

const PrimaryButtton = ({ children, tamanho }) => {
  return (
    <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>{children}</button>
  )
}

export default PrimaryButtton