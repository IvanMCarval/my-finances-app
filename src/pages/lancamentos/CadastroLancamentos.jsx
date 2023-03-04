import React from 'react'

import { withRouter } from 'react-router-dom'

import Card from '../../components/Card'

import SelectMenu from '../../components/SelectMenu'

import LancamentoService from '../../services/lancamento/lancamentoService'
import LocalStorageService from '../../services/local/localstorageService'

import * as messages from '../../components/toastr'

class CadastroLancamentos extends React.Component {
  constructor() {
    super()
    this.service = new LancamentoService()
  }

  state = {
    id: null,
    descricao: '',
    valor: '',
    mes: '',
    ano: '',
    tipo: '',
    status: '',
    usuario: null,
    atualizando: false,
  }

  componentDidMount() {
    const params = this.props.match.params
    if (params.id) {
      this.service
        .obterPorId(params.id)
        .then((response) => {
          this.setState({ ...response.data, atualizando: true })
        })
        .catch((error) => {
          messages.mensagemErro(error.response.data)
        })
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({ [name]: value })
  }

  submit = () => {
    const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

    const { descricao, valor, mes, ano, tipo } = this.state

    const lancamento = {
      descricao,
      valor,
      mes,
      ano,
      tipo,
      usuario: usuarioLogado.id,
    }

    try {
      this.service.validar(lancamento)
    } catch (erro) {
      const mensagens = erro.mensagens
      mensagens.forEach((msg) => {
        messages.mensagemErro(msg)
      })
      return false
    }

    this.service
      .salvar(lancamento)
      .then((response) => {
        this.props.history.push('/consulta_lancamentos')
        messages.mensagemSucesso('Lançamento cadastrado com sucesso!')
      })
      .catch((error) => {
        messages.mensagemErro(error.response.data)
      })
  }

  atualizar = () => {
    const { descricao, valor, mes, ano, tipo, id, usuario, status } = this.state

    const lancamento = {
      descricao,
      valor,
      mes,
      ano,
      tipo,
      id,
      usuario,
      status,
    }

    this.service
      .atualizar(lancamento)
      .then((response) => {
        this.props.history.push('/consulta_lancamentos')
        messages.mensagemSucesso('Lançamento atualizado com sucesso!')
      })
      .catch((error) => {
        messages.mensagemErro(error.response.data)
      })
  }

  render() {
    const tipos = this.service.obterListaTipos()
    const meses = this.service.obterListaMeses()

    return (
      <div className="container" style={{ padding: '100px' }}>
        <div className="column">
          <Card title={this.state.atualizando ? 'Atualização de lancamento' : 'Cadastro de lancamento'}>
            <div className="row">
              <div className="col-md-16">
                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label>Descrição: *</label>
                  <input type="text" className="form-control" name="descricao" onChange={this.handleChange} value={this.state.descricao} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label>Ano: *</label>
                  <input type="text" className="form-control" name="ano" onChange={this.handleChange} value={this.state.ano} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label>Mês: *</label>
                  <SelectMenu lista={meses} name="mes" onChange={this.handleChange} value={this.state.mes} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label>Tipo: *</label>
                  <SelectMenu lista={tipos} name="tipo" onChange={this.handleChange} value={this.state.tipo} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label>Valor: *</label>
                  <input type="text" className="form-control" name="valor" onChange={this.handleChange} value={this.state.valor} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label>Status: </label>
                  <input type="text" className="form-control" disabled name="status" value={this.state.status} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6" style={{ marginTop: '10px' }}>
                {this.state.atualizando ? (
                  <button className="btn btn-success" style={{ marginRight: '15px' }} onClick={this.atualizar}>
                    <i className="pi pi-refresh" /> Atualizar
                  </button>
                ) : (
                  <button className="btn btn-success" style={{ marginRight: '15px' }} onClick={this.submit}>
                    <i className="pi pi-save" /> Salvar
                  </button>
                )}

                <button className="btn btn-danger" onClick={(e) => this.props.history.push('/consulta_lancamentos')}>
                  <i className="pi pi-times" /> Cancelar
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default withRouter(CadastroLancamentos)
