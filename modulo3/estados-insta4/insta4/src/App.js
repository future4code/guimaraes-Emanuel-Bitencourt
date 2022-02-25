import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import IconeComtador  from './components/IconeComContador/IconeComContador';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

    state= {
      post : [
        {nomeUsuario:'paulinha', fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'},

        {nomeUsuario:'carlinhos', fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost:'https://picsum.photos/200/151'},

        {nomeUsuario:'roy batt',fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/155'},
      ]

  };


  render() {

    const PostsLista = this.state.post.map((item,i) => {return < Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost}/>});

    return (
      <MainContainer>
       
       {PostsLista}

      </MainContainer>
    );
  }
}

export default App;
