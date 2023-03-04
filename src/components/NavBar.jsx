import React from 'react'

import NavBarItem from './NavBarItem'

import { AuthConsumer } from '../ProvedorAutenticacao'

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/home">
          Minhas Finanças
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <NavBarItem render={props.isUsuarioAutenticado} href="/home" label="Home" />
            <NavBarItem render={props.isUsuarioAutenticado} href="/cadastrar-usuario" label="Usuários" />
            <NavBarItem render={props.isUsuarioAutenticado} href="/consulta_lancamentos" label="Lançamentos" />
            <NavBarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} href="/login" label="Sair" />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default () => <AuthConsumer>{(context) => <NavBar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} />}</AuthConsumer>
