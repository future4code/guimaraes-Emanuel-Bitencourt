import React from 'react';
import './CardPequeno.js'

function CardPequeno(props) {
    return (
        <div className="page-section-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;