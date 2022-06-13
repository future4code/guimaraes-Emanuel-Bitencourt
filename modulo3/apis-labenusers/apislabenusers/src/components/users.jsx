import React from "react";
import axios from "axios";

class Cadastro extends React.Component {
    state = {
        usuarios: []
    }
    deletarUsuario = (usuarioId) => {
        axios.delete(https: {
            headers: {
                Authorization: ""
            }
        })
            .then(response => {
                console.log(response.data)
                alert("Usuário deletado com sucesso")
                this.getUserByld()
            })
            .catch(error => {
                console.log(error.message)
                alert ("Erro ao deletar usuário")
            })
    }

    componentDidMount() {
        axios.get("", {
            headers: {
                Authorization: "s"
            }
        })
            .then(response => {
                this.setState({
                    usuarios: response.data
                })
            })
            .catch(error => {
                alert ("Erro ao buscar usuários")
            })
    }
mostrarUsuarios = () => {
        axios.get('', {
            headers: {
                Authorization: ""
            }
        })
        const usuarios = this.state.usuarios.map(usuario => {
            return (
                <li key={usuario.id}>
                    {usuario.name}
                    {usuario.email}
                    <button onClick={() => this.deletarUsuario(usuario.id)}>Deletar</button>
                </li>
            )
        })
        return usuarios
    }
    render() {
        return (
            <div className="App">
                <h1>Cadastro de Usuários</h1>
                <ul>
                    {this.mostrarUsuarios()}
                </ul>
            </div>
        );
    }
}
export default ;