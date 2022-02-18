import React from 'react';
import styled from 'styled-components'; 

const LitleCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagemLitleCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const TextLitle = styled.div`
    display:flex;
    flex-direction: column;
    justify-items:flex-start;
`
const LitleTexto = styled.h4`
    margin-bottom: 15px;
`


function CardPequeno(props) {
    return (
        <LitleCardContainer>
            <ImagemLitleCard src={ props.imagem } />
            <TextLitle>
                <LitleTexto>{ props.nome }</LitleTexto>
                <p>{ props.endereco }</p>
            </TextLitle>
        </LitleCardContainer>
    )
}

export default CardPequeno;