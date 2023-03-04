import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../../components/Card'
import SelectMenu from '../../components/SelectMenu'
import LancamentosTable from './LancamentosTable'

import LancamentoService from '../../services/lancamento/lancamentoService'
import LocalStorageService from '../../services/local/localstorageService'

import * as messages from '../../components/toastr'

import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

class ConsultaLancamento extends React.Component {
  state = {
    ano: '',
    mes: '',
    tipo: '',
    descricao: '',
    showConfirmDialog: false,
    lancamentoDeletar: {},
    lancamentos: [],
  }

  constructor() {
    super()
    this.servise = new LancamentoService()
  }

  buscar = () => {
    if (!this.state.ano) {
      messages.mensagemErro('O ano é campo obrigatorio')
      return false
    }

    const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

    const lancamentoFiltro = {
      ano: this.state.ano,
      mes: this.state.mes,
      tipo: this.state.tipo,
      descricao: this.state.descricao,
      usuario: usuarioLogado.id,
    }

    this.servise
      .consultar(lancamentoFiltro)
      .then((response) => {
        const lista = response.data
        if (lista.length < 1) {
          messages.mensagemAlerta('Nenhum resultado encontrado')
        }
        this.setState({ lancamentos: lista })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  editar = (id) => {
    this.props.history.push(`/cadastro_lancamentos/${id}`)
  }

  deletar = () => {
    this.servise
      .deletar(this.state.lancamentoDeletar.id)
      .then((response) => {
        const lancamentos = this.state.lancamentos
        const index = lancamentos.indexOf(this.state.lancamentoDeletar)
        lancamentos.splice(index, 1)

        this.setState({ lancamentos: lancamentos, showConfirmDialog: false })

        messages.mensagemSucesso('Lançamento deletado com sucesso!')
      })
      .catch((error) => {
        messages.mensagemErro('Erro ao tentar deletar lançamento')
      })
  }

  alterarStatus = (lancamento, status) => {
    this.servise.alterarStatus(lancamento.id, status).then((response) => {
      const lancamento = this.state.lancamentos
      const index = lancamento.indexOf(lancamento)

      if (index !== -1) {
        lancamento['status'] = status
        lancamento[index] = lancamento
        this.setState({ lancamento })
      }
      messages.mensagemSucesso('Status atualizado com sucesso!')
    })
  }

  preparaFormularioCadastro = () => {
    this.props.history.push('/cadastro_lancamentos')
  }

  abrirConfirmacao = (lancamento) => {
    this.setState({ showConfirmDialog: true, lancamentoDeletar: lancamento })
  }

  cancelarDelecao = () => {
    this.setState({ showConfirmDialog: false, lancamentoDeletar: {} })
  }

  render() {
    const listaMes = this.servise.obterListaMeses()

    const listaTipo = this.servise.obterListaTipos()

    const footerContent = (
      <div>
        <Button label="Não" icon="pi pi-times" onClick={this.cancelarDelecao} className="p-button-text" />
        <Button label="Sim" icon="pi pi-check" onClick={this.deletar} autoFocus />
      </div>
    )

    return (
      <div className="container" style={{ display: 'block', justifyContent: 'center', paddingTop: '50px' }}>
        <div className="column">
          <div className="col-md-14">
            <div className="bs-docs-section">
              <Card title="Consulta Lançamentos">
                <div className="row">
                  <div className="col-md-12">
                    <div className="bs-component">
                      <div className="form-group" style={{ marginBottom: '10px' }}>
                        <label>Ano: *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          value={this.state.ano}
                          onChange={(e) => this.setState({ ano: e.target.value })}
                          placeholder="Digite o Ano"
                        />
                      </div>

                      <div className="form-group" style={{ marginBottom: '10px' }}>
                        <label>Mês: *</label>
                        <SelectMenu value={this.state.mes} onChange={(e) => this.setState({ mes: e.target.value })} lista={listaMes} />
                      </div>

                      <div className="form-group" style={{ marginBottom: '10px' }}>
                        <label>Descrição: *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="imputDesc"
                          value={this.state.descricao}
                          onChange={(e) => this.setState({ descricao: e.target.value })}
                          placeholder="Digite a descrição"
                        />
                      </div>

                      <div className="form-group" style={{ marginBottom: '10px' }}>
                        <label>Tipo de Lançamento: </label>
                        <SelectMenu value={this.state.tipo} onChange={(e) => this.setState({ tipo: e.target.value })} lista={listaTipo} />
                      </div>

                      <div style={{ paddingTop: '20px' }}>
                        <button onClick={this.buscar} type="button" className="btn btn-success" style={{ marginRight: '15px' }}>
                          <i className="pi pi-search" /> Buscar
                        </button>
                        <button type="button" className="btn btn-danger" onClick={this.preparaFormularioCadastro}>
                          <i className="pi pi-plus" /> Cadastrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <div className="bs-component">
                      <LancamentosTable lancamentos={this.state.lancamentos} deleteAction={this.abrirConfirmacao} editAction={this.editar} alterarStatus={this.alterarStatus} />
                    </div>
                  </div>
                </div>

                <div>
                  <Dialog
                    header="Confirmar deleção?"
                    visible={this.state.showConfirmDialog}
                    style={{ width: '50vw' }}
                    onHide={() => this.setState({ showConfirmDialog: false })}
                    footer={footerContent}
                  >
                    Confirma a exclusão deste lançamento?
                  </Dialog>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ConsultaLancamento)
