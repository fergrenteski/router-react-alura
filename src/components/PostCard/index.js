import React from 'react'
import styles from './PostCard.module.css'
import { Link } from 'react-router-dom'
import PrimaryButtton from 'components/common/PrimaryButton'

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
        <div className={styles.post}>
          <img className={styles.capa} src={`assets/posts/${post.id}/capa.png`} alt={post.titulo} />

          <h2 className={styles.titulo}>{post.titulo}</h2>

          <PrimaryButtton>Ler</PrimaryButtton>
        </div>
    </Link>
  )
}

export default PostCard