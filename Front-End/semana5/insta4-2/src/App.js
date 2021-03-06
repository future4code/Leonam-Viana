import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import segundoPost from './img/segundoPost.jpg';
import terceiroPost from './img/terceiroPost.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Leonam'}
          fotoUsuario={segundoPost}
          fotoPost={segundoPost}
        />

        <Post
          nomeUsuario={'Manoel'}
          fotoUsuario={terceiroPost}
          fotoPost={terceiroPost}
        />
      </div>
    );
  }
}

export default App;
