import React from 'react';
import styled from 'styled-components';

const DivEtapa3 = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

class Etapa3 extends React.Component{
    state = {
        valorSemCursoGrad:'',
    }

    onChangeSemCurso = (event) => {
        this.setState({valorSemCursoGrad: event.target.value})
    }

    render(){
        return(
            <DivEtapa3>
                <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
                <h4>5. Por que você não terminou um curso de graduação?</h4>
                <input name = {'semCurso'} onChange={this.onChangeSemCurso} value={this.state.valorSemCursoGrad}/> 
                <h4>6. Você fez algum curso complementar?</h4>
                <select>
                   <option value='opcao1'>Curso técnico</option>
                   <option value='opcao2'>Cursos de inglês</option>
                   <option value='opcao3'>Não fiz curso complementar</option> 
                </select>   
            </DivEtapa3>
        )
    }
}

export default Etapa3;