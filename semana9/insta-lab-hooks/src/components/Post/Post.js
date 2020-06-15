import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [liked, setLiked] = useState(false)
  const [numberLikes, setNumberLikes] = useState(0)
  const [commenting, setCommenting] = useState(false)
  const [numberComments, setNumberComments] = useState(0)
  const [comments, setComments] = useState([])

  const onClickCurtida = () => {
    if (liked) {
      setLiked(!liked)
      setNumberLikes(numberLikes - 1)
    } else {
      setLiked(!liked)
      setNumberLikes(numberLikes + 1)
    }
  };

  const onClickComentario = () => {
    setCommenting(!commenting)
  };

  const enviarComentario = (comment) => {
    const listaDeComentarios = [...comments, comment]

    setComments(listaDeComentarios)
    setCommenting(false)
    setNumberComments(numberComments + 1)
    
  }

  const iconeCurtida = liked ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  const caixaDeComentario = commenting ? (
    // Componente com o input e botão de enviar novo comentario. Import dele na linha 5.
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
    // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
    comments.map(comment => {
      return (
        <CommentContainer>
          <p>{comment}</p>
        </CommentContainer>
      )
    })
  )
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numberLikes}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numberComments}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post