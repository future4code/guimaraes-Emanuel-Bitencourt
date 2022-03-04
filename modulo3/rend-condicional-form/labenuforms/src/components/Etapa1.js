import  React from "react ";
import styled from "styled-components";


class Etapa1 extends React.Component {
    render(){
        return(
            <DivEtapa1>
                <h3> ETAPA 1 DADOS GERAIS </h3>
                <h4> 1. Qual o seu nome?</h4>
                <input type= placeholder></input>
                <h4> 2. Qual a sua idade?</h4>
                <input type='text' placeholder></input>
                <h4> 3. Qual seu email?</h4>
                <input type='text' placeholder></input>
                <h4>4. Qual a sua escolaridade?</h4>
                
                <select>
                    <option value='opcao1'>Ensino Médio Incompleto</option>
                    <option value='opcao2'>Ensino Médio Completo</option>
                    <option value='opcao3'>Ensino Superior Incompleto</option>
                    <option value='opacao4'>Ensino Superior Completo</option>   
                </select>
            </DivEtapa1>
        )
    }

}
 export default Etapa1;

