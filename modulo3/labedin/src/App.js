import React from 'react';
import styled from 'styled-components'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import MinhaImagem from './img/emanuel.jpg'
import Labenu from './img/labenu.png'
import Movistar from './img/movistar.png'
import ImagemEmail from './img/email.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaImagem} 
          nome="Emanuel" 
          descricao="Meu nome é Emanuel! Sou aluno da labenu e me tornarei um desenvolvedor FullStack, com muita luta e sacrifício, mas chegarei lá"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem={ImagemEmail}
        texto="emanuel@nasa.com"
        endereco="Rua Planeta Terra"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Labenu}
          nome="Labenu" 
          descricao="Em processo de formação e feliz por fazer parte do corpo discente, pois apesar de ser cobrado,sou muito bem amparado." 
        />
      
        <CardGrande 
          imagem={Movistar} 
          nome="Movistar" 
          descricao="Ciclista amador e torcedor da equipe, fã do grande Alejandro Valverde da equipe Movistar" 
        />
      </div>
      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
      

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
