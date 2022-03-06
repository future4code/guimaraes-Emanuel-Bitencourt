import  React from "react ";
import styled from "styled-components";

const DivEtapa1 = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
` 


const selecao = {[
    'Ensino médio incompleto',
    'Ensino médio completo',
    'Ensino superior incompleto',
    'Ensino superior completo'
]};

class Etapa1 extends React.Component {
    state={
        valorNome:'',
        valorIdade:'',
        valorEmail:'',
        valorEscolaridade:''
    }

    onChangeNome = (event) =>{
        this.setState({valorNome: event.target.value})
    }
    onChangeIdade = (event) =>{
        this.setState({valorIdade: event.target.value})
    }
    onChangeEmail = (event) =>{
        this.setState({valorEmail: event.target.value})
    }
    onChangeEscolaridade = (event) =>{
        this.setState({valorEscolaridade: event.target.value})
    } 

    state={

    }

    render(){
        return(
            <DivEtapa1>
                <h3> ETAPA 1 DADOS GERAIS </h3>
                <h4> 1. Qual o seu nome?</h4>
                <input name= {'nome'} onChange={this.onChangeNome} value={this.state.valorNome} />
                <h4> 2. Qual a sua idade?</h4>
                <input name={'idade'} onChange={this.onChangeIdade} value={this.state.valorIdade} />
                <h4> 3. Qual seu email?</h4>
                <input name={'email'} onChange={this.onChangeEmail} value={this.state.valorEmail}/>
                <h4>4. Qual a sua escolaridade?</h4>
                
                <selecao>
                    <p>{this.state.selecao}</p>
                </selecao>

            </DivEtapa1>
        )
    }

}
 export default Etapa1;

