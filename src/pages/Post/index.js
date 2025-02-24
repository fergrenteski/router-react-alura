import './Post.css';

import React from 'react'
import { useParams } from 'react-router-dom'
import posts from 'json/posts.json';
import PostModel from 'components/PostModel';
import ReactMarkdown from 'react-markdown';

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => post.id === Number(parametros.id));

  if(!post) {
    return <h1>Post não encontrado...</h1>
  }
  return (
    <PostModel fotoCapa={`assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <div className='post-markdown-container'>
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostModel>
  )
}

export default Post