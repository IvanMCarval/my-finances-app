import React from "react";
import UsuarioService from "../services/usuario/usuarioService";

class Home extends React.Component {
  state = {
    saldo: 0
  }

  constructor() {
    super()
    this.usuarioService = new UsuarioService()
  }

  componentDidMount() {
    const usuarioLogadoString = localStorage.getItem('_usuario_logado')
    const usuarioLogado = JSON.parse(usuarioLogadoString)

    this.usuarioService.obterSaldoPorUsuario(usuarioLogado.id)
      .then(response => {
        this.setState({saldo: response.data})
      }).catch(erro => {
        alert(erro.response.data)
      })
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '100px' }}>
        <div className="card-2">
          <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">Esse é seu sistema de finanças.</p>
            <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
            <hr className="my-4" />
            <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
            <p className="lead">
              <button className="btn btn-info btn-lg" style={{ marginRight: '15px' }}>Cadastrar Usuário</button>
              <button className="btn btn-danger btn-lg">Cadastrar Lançamento</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home