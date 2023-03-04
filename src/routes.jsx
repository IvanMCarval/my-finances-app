import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthConsumer } from './ProvedorAutenticacao'
import CadastrarUsuario from './pages/CadastrarUsuario'
import Home from './pages/Home'
import Login from './pages/Login'
import ConsultaLancamento from './pages/lancamentos/ConsultaLancamentos'
import CadastroLancamentos from './pages/lancamentos/CadastroLancamentos'
import LandingPage from './pages/LandingPage'

import AuthService from './services/authService'

function RotaAutenticada({ component: Component, isUsuarioAutenticado, ...props }) {
  return (
    <Route
      exact
      {...props}
      render={(componentProps) => {
        if (isUsuarioAutenticado) {
          return <Component {...componentProps} />
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: componentProps.location } }} />
        }
      }}
    />
  )
}

function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastrar-usuario" component={CadastrarUsuario} />

        <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
        <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta_lancamentos" component={ConsultaLancamento} />
        <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro_lancamentos/:id?" component={CadastroLancamentos} />
      </Switch>
    </BrowserRouter>
  )
}

export default () => <AuthConsumer>{(context) => <Router isUsuarioAutenticado={context.isAutenticado} />}</AuthConsumer>
