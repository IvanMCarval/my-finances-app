import React from 'react'
import { withRouter } from 'react-router-dom'
import { AuthContext } from '../ProvedorAutenticacao'

import { mensagemErro } from '../components/toastr'

import Card from '../components/Card'

import UsuarioService from '../services/usuario/usuarioService'

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    mensagemErro: null,
  }

  constructor() {
    super()
    this.service = new UsuarioService()
  }

  cadastrar = () => {
    this.props.history.push('/cadastrar-usuario')
  }

  logar = () => {
    this.service
      .autenticar({
        email: this.state.email,
        senha: this.state.senha,
      })
      .then((response) => {
        this.context.iniciarSessao(response.data)
        this.props.history.push('/home')
      })
      .catch((erro) => {
        console.log(erro)
        mensagemErro(erro.response.data)
      })
  }

  render() {
    return (
      <div className="container" style={{ padding: '100px' }}>
        <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-13">
            <div className="bs-docs-section">
              <Card title="Login">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <fieldset>
                        <div className="form-group">
                          <div className="form-group">
                            <label className="form-label my-6">Email</label>
                            <input type="email" className="form-control" placeholder="Digite o email" onChange={(event) => this.setState({ email: event.target.value })}></input>
                          </div>

                          <div className="form-group">
                            <label className="form-label my-6">Senha</label>
                            <input type="password" className="form-control" placeholder="Digite a senha" onChange={(event) => this.setState({ senha: event.target.value })}></input>
                          </div>

                          <div className="mt-1">
                            <span style={{ color: 'orange' }}>{this.state.mensagemErro}</span>
                          </div>

                          <div style={{ paddingTop: '20px' }}>
                            <button onClick={this.logar} className="btn btn-success" style={{ marginRight: '15px' }}>
                              <i className="pi pi-sign-in" /> Login
                            </button>
                            <button onClick={this.cadastrar} className="btn btn-info">
                              <i className="pi pi-plus" /> Cadastrar
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.contextType = AuthContext

export default withRouter(Login)
