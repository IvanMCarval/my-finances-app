import React from 'react'
import Currency from 'currency-formatter'

export default (props) => {
  const rows = props.lancamentos.map((lancamento) => {
    return (
      <tr className="table-active" key={lancamento.id}>
        <td>{lancamento.descricao}</td>
        <td>{Currency.format(lancamento.valor, { locale: 'pt-BR' })}</td>
        <td>{lancamento.tipo}</td>
        <td>{lancamento.mes}</td>
        <td>{lancamento.status}</td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={(e) => props.alterarStatus(lancamento, 'EFETIVADO')}
            style={{ marginRight: '15px' }}
            title="Efetivar"
            disabled={lancamento.status !== 'PENDENTE'}
          >
            <i className="pi pi-check" />
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={(e) => props.alterarStatus(lancamento, 'CANCELADO')}
            style={{ marginRight: '15px' }}
            title="Cancelar"
            disabled={lancamento.status !== 'PENDENTE'}
          >
            <i className="pi pi-times" />
          </button>
          <button type="button" className="btn btn-primary" onClick={(e) => props.editAction(lancamento.id)} style={{ marginRight: '15px' }} title="Editar">
            <i className="pi pi-pencil" />
          </button>
          <button type="button" className="btn btn-danger" onClick={(e) => props.deleteAction(lancamento)} title="Deletar">
            <i className="pi pi-trash" />
          </button>
        </td>
      </tr>
    )
  })

  return (
    <table className="table table-hover table-responsive">
      <thead>
        <th scope="col">Descrição</th>
        <th scope="col">Valor</th>
        <th scope="col">Tipo</th>
        <th scope="col">Mês</th>
        <th scope="col">Situação</th>
        <th scope="col">Ações</th>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
