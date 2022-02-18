import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px; 
`
const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const TextCard = styled.div`
display:flex;
flex-direction: column;
justify-items:flex-start;
`
const NomeTexto = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <Imagem src={ props.imagem } />
            <TextCard>
                <NomeTexto>{ props.nome }</NomeTexto>
                <p>{ props.descricao }</p>
            </TextCard>
        </BigCardContainer>
    )
}

export default CardGrande;