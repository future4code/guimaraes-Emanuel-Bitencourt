import React from 'react';
import styled from 'styled-components';

const DivEtapa2 = styled.div`
display: flex;
justify-content: center;
padding: 5px;
`


class Etapa2 extends React.Component {
    state={
        opcaoCurso:'',
        unidadeEnsino:''
    }
onChangeCurso = (event) => {
    this.setState({opcaoCurso:event.target.value})
}
onChangeUnidadeEnsino = (event) => {
    this.setState({unidadeEnsino:event.target.value})
}

    render() {
        return(
            <DivEtapa2>
                <h3>ETAPA 3 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <h4> 5. Qual o curso?</h4>
                <input name={'curso'} onChange={this.onChangeCurso} value={this.state.opcaoCurso}/>
                <h4> 6. Qual a unidade de ensino?</h4>
                <input name={'unidade'} onChange={this.onChangeUnidadeEnsino} value={this.state.unidadeEnsino}/>
            </DivEtapa2>
        )
    }

}

export default Etapa2;