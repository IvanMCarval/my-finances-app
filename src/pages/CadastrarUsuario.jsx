import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/Card'

import UsuarioService from '../services/usuario/usuarioService'

import { mensagemSucesso, mensagemErro } from '../components/toastr'

class CadastrarUsuario extends React.Component {
  state = {
    nome: '',
    email: '',
    senha: '',
    senhaRepetida: '',
  }

  constructor() {
    super()
    this.service = new UsuarioService()
  }

  cadastrar = () => {
    const { nome, email, senha, senhaRepetida } = this.state

    const usuario = {
      nome,
      email,
      senha,
      senhaRepetida,
    }

    try {
      this.service.validar(usuario)
    } catch (erro) {
      const msgs = erro.mensagens
      msgs.forEach((msg) => mensagemErro(msg))
      return false
    }

    this.service
      .salvarUsuraio(usuario)
      .then((response) => {
        mensagemSucesso('Usuário Cadastrado com sucesso!')
        this.props.history.push('/login')
      })
      .catch((erro) => {
        mensagemErro(erro.response.data)
      })
  }

  cancelar = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="container" style={{ padding: '100px' }}>
        <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-13">
            <div className="bs-docs-section">
              <Card title={'Cadastrar'}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <div className="form-group">
                        <div className="form-group" style={{ marginBottom: '10px' }}>
                          <label>Nome: *</label>
                          <input type="text" className="form-control" placeholder="Digite o Nome" onChange={(event) => this.setState({ nome: event.target.value })}></input>
                        </div>
                        <div className="form-group" style={{ marginBottom: '10px' }}>
                          <label>Email: *</label>
                          <input type="email" className="form-control" placeholder="Digite o Email" onChange={(event) => this.setState({ email: event.target.value })}></input>
                        </div>
                        <div className="form-group" style={{ marginBottom: '10px' }}>
                          <label>Senha: *</label>
                          <input type="password" className="form-control" placeholder="Password" onChange={(event) => this.setState({ senha: event.target.value })}></input>
                        </div>

                        <div className="form-group">
                          <label>Repita a Senha: *</label>
                          <input type="password" className="form-control" placeholder="Password" onChange={(event) => this.setState({ senhaRepetida: event.target.value })}></input>
                        </div>

                        <div style={{ paddingTop: '20px' }}>
                          <button onClick={this.cadastrar} className="btn btn-success" style={{ marginRight: '15px' }}>
                            <i className="pi pi-save" /> Salvar
                          </button>
                          <button onClick={this.cancelar} className="btn btn-danger">
                            <i className="pi pi-times" /> Cancelar
                          </button>
                        </div>
                      </div>
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

export default withRouter(CadastrarUsuario)
